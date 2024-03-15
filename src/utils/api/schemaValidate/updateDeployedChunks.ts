import type { NextApiRequest } from 'next';

import type { GraphHub_DeployedSchemaChunk_Insert_Input } from 'src/types/generated/graphql.frontend.types';
import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

type Params = {
  bulkJobId: number;
  chatCompletionOptionIds: number[];
  chunkResult: {
    id: number;
    oldCompletionResult: string;
  }[];
  req: NextApiRequest;
  schemaId: number;
};

/**
 * Save the new bulk job id, old completion result to `data` field
 * and replace current chat option id with the new one, to the current schema
 */
export const updateDeployedChunks = async ({
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

  const { errors } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/upsertGraphHubDeployedSchemaChunk',
    requestHeaders: headers,
    variables: {
      objects: chunkResult.map(
        (chunk, index): GraphHub_DeployedSchemaChunk_Insert_Input => ({
          apiReferenceData: chunk.oldCompletionResult,
          bulkJobId,
          chatCompletionOptionId: chatCompletionOptionIds[index] || null,
          deployedSchemaId: schemaId,
          id: chunk.id,
        })
      ),
    },
  });

  if (errors.length) {
    throw new Error(errors[0]?.message);
  }
  // update new bulk job id to deployed schema
  const { errors: deployedSchemaErrors } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/upsertGraphHubDeployedSchema',
    requestHeaders: headers,
    variables: {
      objects: {
        data: '',
        id: schemaId,
      },
    },
  });

  if (deployedSchemaErrors.length) {
    throw new Error(deployedSchemaErrors[0]?.message);
  }
};
