import type { NextApiRequest } from 'next';

import type { GraphQLSchema } from 'graphql';

import { getMiddlewareHeader } from 'src/middleware';
import type { GraphHub_DraftSchemaChunk_Insert_Input } from 'src/types/generated/graphql.frontend.types';
import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { convertToSchemaType } from 'src/utils/api/schemaManipulation/convertToSchemaType';
import { gqlRequest } from 'src/utils/gqlRequest';

type IGroupSchema = {
  chunkType: 'requiredFieldOnly' | 'optionalFieldOnly';
  extractedChunkSchema: GraphQLSchema;
  fieldName: string;
}[];

export const handleInsertDraftSchemaChunk = async ({
  bulkJobId,
  chatCompletionOptionIds,
  extractedSchemaGroup,
  req,
  schemaId,
}: {
  bulkJobId?: number;
  chatCompletionOptionIds: number[];
  extractedSchemaGroup?: IGroupSchema;
  req: NextApiRequest;
  schemaId: number;
}) => {
  const { headers, url } = await getGraphQlVariables({
    req,
    schema: 'frontend',
  });
  const user = getMiddlewareHeader({
    key: 'x-internal-middleware-user',
    req,
  });

  // Prepare objects to save
  const objects = chatCompletionOptionIds.map(
    (chatCompletionOptionId, index): GraphHub_DraftSchemaChunk_Insert_Input => {
      const currentGroup = extractedSchemaGroup?.[index];
      const schema = currentGroup?.extractedChunkSchema;
      if (!schema) {
        const errorMessage = `Extracted schema chunk is not defined for extractedSchemaGroup[${index}]`;
        console.error(
          errorMessage,
          JSON.stringify({
            extractedSchemaGroup: extractedSchemaGroup?.[index],
          })
        );
        throw new Error(errorMessage);
      }
      const chunkLabel = `${currentGroup.fieldName} (${currentGroup.chunkType})`;
      const schemaDefinition = convertToSchemaType(schema);
      return {
        apiReferenceData: '',
        apiReferenceDataLabel: chunkLabel,
        bulkJobId,
        chatCompletionOptionId,
        draftSchemaId: schemaId,
        schemaDefinition,
        userId: user.id,
      };
    }
  );
  try {
    const { errors, json } = await gqlRequest({
      customUrl: url,
      endpoint: 'frontend/upsertGraphHubDraftSchemaChunk',
      requestHeaders: headers,
      variables: {
        objects,
      },
    });

    if (errors.length) {
      throw new Error(errors[0]?.message || '');
    }

    return json?.insert_graphHub_draftSchemaChunk?.returning || [];
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Insert draft schema chunk error: ${err.message}`);
    }
  }
  throw new Error('Unknown error');
};
