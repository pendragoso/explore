import type { NextApiRequest } from 'next';

import type { GraphHub_DraftSchemaChunk_Insert_Input } from 'src/types/generated/graphql.frontend.types';
import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

type Params = {
  bulkJobId: number;
  chatCompletionOptionIds: number[];
  chunkResult: {
    apiReferenceDataLabel: string | null;
    chatCompletionResult: string;
    id: number;
    userId: string;
  }[];
  req: NextApiRequest;
  schemaId: number;
};

/**
 * Save the new bulk job id, old completion result to `data` field
 * and replace current chat option id with the new one, to the current schema
 */
export const updateDraftChunks = async ({
  bulkJobId,
  chatCompletionOptionIds,
  chunkResult,
  req,
  schemaId,
}: Params) => {
  const { headers, url } = await getGraphQlVariables({
    req,
    schema: 'frontend',
  });

  const objects = chunkResult.map(
    (chunk, index): GraphHub_DraftSchemaChunk_Insert_Input => {
      if (!chatCompletionOptionIds[index]) {
        console.error(
          'No chat completion found',
          JSON.stringify({ chatCompletionOptionIds, chunkResult })
        );
        throw new Error(
          `No matching bulk chat completion id found for ${chunk.id}.`
        );
      }
      return {
        apiReferenceData: chunk.chatCompletionResult,
        apiReferenceDataLabel: chunk.apiReferenceDataLabel,
        bulkJobId,
        chatCompletionOptionId: chatCompletionOptionIds[index] || null,
        draftSchemaId: schemaId,
        id: chunk.id,
        userId: chunk.userId,
      };
    }
  );

  const { errors } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/upsertGraphHubDraftSchemaChunk',
    requestHeaders: headers,
    variables: {
      objects,
    },
  });

  if (errors.length) {
    throw new Error(errors[0]?.message);
  }
};
