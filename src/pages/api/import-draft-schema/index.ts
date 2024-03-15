import type { NextApiRequest, NextApiResponse } from 'next';

import type { GraphQLSchema } from 'graphql';

import { ImportDraftSchemaRequest } from 'src/types';
import { handleHeaders } from 'src/utils/api';
import { paginateArray } from 'src/utils/api/paginateArray';
import { preparePaginateChunkSchema } from 'src/utils/api/preparePaginateChunkSchema';
import { filterSchemaToProcess } from 'src/utils/api/schemaImport/filterSchemaToProcess';
import { handleBulkChatBotRequest } from 'src/utils/api/schemaImport/handleBulkChatBotRequest';
import { handleInsertDraftSchema } from 'src/utils/api/schemaImport/handleInsertDraftSchema';
import { handleInsertDraftSchemaChunk } from 'src/utils/api/schemaImport/handleInsertDraftSchemaChunk';
import { prepareChunkSchemaRequest } from 'src/utils/api/schemaImport/prepareChunkSchemaRequest';
import { processSchemaGroup } from 'src/utils/api/schemaImport/processSchemaGroup';
import { convertToInstrospectionQuery } from 'src/utils/api/schemaManipulation/convertToInstrospectionQuery';
import { extractAndConvertSchema } from 'src/utils/api/schemaManipulation/extractAndConvertSchema';
import { jsonParse } from 'src/utils/jsonParse';

type IGroupSchema = {
  schema: GraphQLSchema;
  schemaType: 'query' | 'mutation';
}[];

const processAndChunkRequest = async ({
  newDraftSchemaId,
  req,
  schemaGroup,
}: {
  newDraftSchemaId: number;
  req: NextApiRequest;
  schemaGroup: IGroupSchema;
}) => {
  const { mutationSchemas, querySchemas } = processSchemaGroup({ schemaGroup });
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
    let errorMessage = 'Unknown error.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Bulk chatbot request error: ${errorMessage}`);
  }

  const extractedSchemaGroup = [
    /** Query */
    ...brokenDownQuerySchemas.extractedRequiredFieldsSchemas,
    ...brokenDownQuerySchemas.extractedOptionalFieldsSchemas,

    /** Mutation */
    ...brokenDownMutationSchemas.extractedRequiredFieldsSchemas,
    ...brokenDownMutationSchemas.extractedOptionalFieldsSchemas,
  ];
  // Create schema chunks with the new schema id and referencing chatbot completion option ids
  try {
    await handleInsertDraftSchemaChunk({
      bulkJobId,
      chatCompletionOptionIds,
      extractedSchemaGroup,
      req,
      schemaId: newDraftSchemaId,
    });
  } catch (error) {
    let errorMessage = 'Unknown error.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Insert draft schema chunk error: ${errorMessage}`);
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.json('Invalid method');
    return;
  }

  const bodyJson = jsonParse(req.body);

  const parsedBody = ImportDraftSchemaRequest.safeParse(bodyJson);

  if (!parsedBody.success) {
    res.status(400).json(parsedBody.error.format());
    return;
  }

  const {
    chunkPercentSampling,
    schemaContent,
    schemaLabel,
    specificTestFields,
  } = parsedBody.data;

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

  const querySchemas = preparePaginateChunkSchema({
    chunkSchemas: extractedSchema.chunkedQuerySchema,
    schemaType: 'query',
  });
  const mutationSchemas = preparePaginateChunkSchema({
    chunkSchemas: extractedSchema.chunkedMutationSchema,
    schemaType: 'mutation',
  });

  const groupSchemas = [...querySchemas, ...mutationSchemas];

  const filteredSchema = filterSchemaToProcess({
    chunkPercentSampling,
    groupSchemas,
    specificTestFields,
  });

  // Group two schemas and paginate them
  const paginatedSchemas = paginateArray(filteredSchema, 2);

  if (paginatedSchemas.length === 0) {
    res.status(400);
    res.json('No schema to process');
    return;
  }

  let newDraftSchemaId: number;
  // Create a new schema
  try {
    const result = await handleInsertDraftSchema({
      req,
      schemaContent,
      schemaLabel,
    });
    newDraftSchemaId = result.id;
  } catch (error) {
    let errorMessage = 'Unknown error.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Insert draft schema error: ${errorMessage}`);
  }

  const promiseResults = await Promise.allSettled(
    paginatedSchemas.map(async schemaGroup => {
      try {
        await processAndChunkRequest({
          newDraftSchemaId,
          req,
          schemaGroup,
        });
      } catch (error) {
        let errorMessage = 'Unknown error.';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        throw new Error(
          `Process and chunk chat bot request error: ${errorMessage}`
        );
      }
    })
  );

  const failedResults = promiseResults.filter(
    result => result.status === 'rejected'
  );
  if (failedResults.length > 0) {
    res.status(500);
    res.json(
      failedResults.map(
        result => result.status === 'rejected' && { reason: `${result.reason}` }
      )
    );
    return;
  }

  handleHeaders(req, res);
  res.status(200);
  res.json('Import schema successfully');
};
export default handler;
