import type { NextApiRequest, NextApiResponse } from 'next';

import type { IImportDeployedSchemaRequest } from 'src/types';
import { handleHeaders } from 'src/utils/api';
import { handleBulkChatBotRequest } from 'src/utils/api/schemaImport/handleBulkChatBotRequest';
import { handleInsertDeployedSchema } from 'src/utils/api/schemaImport/handleInsertDeployedSchema';
import { handleInsertDeployedSchemaChunk } from 'src/utils/api/schemaImport/handleInsertDeployedSchemaChunk';
import { prepareChunkSchemaRequest } from 'src/utils/api/schemaImport/prepareChunkSchemaRequest';
import { convertToInstrospectionQuery } from 'src/utils/api/schemaManipulation/convertToInstrospectionQuery';
import { extractAndConvertSchema } from 'src/utils/api/schemaManipulation/extractAndConvertSchema';
import { jsonParse } from 'src/utils/jsonParse';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.json('Invalid method');
    return;
  }

  const parsedBody = jsonParse(req.body);

  const { schemaContent, schemaLabel } =
    parsedBody as IImportDeployedSchemaRequest;

  const introspectionQuery = convertToInstrospectionQuery({
    graphqlsContent: schemaContent,
  });

  if (!introspectionQuery) {
    res.status(500);
    res.json("Can't convert schema to introspection query");
    return;
  }

  // Chunk the schema
  const extractedSchema = extractAndConvertSchema({
    schema: introspectionQuery,
  });

  const querySchemas = extractedSchema.chunkedQuerySchema;
  const mutationSchemas = extractedSchema.chunkedMutationSchema;
  // prepare chunk schema request (break down into even smaller chunks)
  const brokenDownQuerySchemas = prepareChunkSchemaRequest({
    graphqlSchemas: querySchemas,
    schemaType: 'query',
  });
  // prepare chunk schema request (break down into even smaller chunks)
  const brokenDownMutationSchemas = prepareChunkSchemaRequest({
    graphqlSchemas: mutationSchemas,
    schemaType: 'mutation',
  });
  const bulkChatBotRequests = [
    /** Query */
    ...brokenDownQuerySchemas.requestsWithRequiredFields,
    ...brokenDownQuerySchemas.requestsWithOptionalFields,

    /** Mutation */
    ...brokenDownMutationSchemas.requestsWithRequiredFields,
    ...brokenDownMutationSchemas.requestsWithOptionalFields,
  ];

  let bulkJobId: number;
  let chatCompletionOptionIds: number[];
  try {
    // Send schema chunks to the chatbot to queue it for processing
    const result = await handleBulkChatBotRequest({ bulkChatBotRequests });
    bulkJobId = result.bulkJobId;
    chatCompletionOptionIds = result.chatCompletionOptionIds;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500);
      res.json(`Bulk chatbot request error: ${error.message}`);
    }
    return;
  }

  let newDeployedSchemaId: number;
  // Create a new schema
  try {
    const result = await handleInsertDeployedSchema({
      req,
      schemaContent,
      schemaLabel,
    });
    newDeployedSchemaId = result.id;
  } catch (error) {
    if (error instanceof Error) {
      res.status(500);
      res.json(`Insert deployed schema error: ${error.message}`);
    }
    return;
  }

  // Create schema chunks with the new schema id and the chatbot completion option ids
  try {
    await handleInsertDeployedSchemaChunk({
      bulkJobId,
      chatCompletionOptionIds,
      req,
      schemaId: newDeployedSchemaId,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500);
      res.json(`Insert deployed schema chunk error: ${error.message}`);
    }
    return;
  }

  handleHeaders(req, res);
  res.status(200);
  res.json('Import schema successfully');
};
export default handler;
