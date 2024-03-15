import type { NextApiRequest } from 'next';

import type { GraphHub_DeployedSchemaChunk_Insert_Input } from 'src/types/generated/graphql.frontend.types';
import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

export const handleInsertDeployedSchemaChunk = async ({
  bulkJobId,
  chatCompletionOptionIds,
  req,
  schemaId,
}: {
  bulkJobId: number;
  chatCompletionOptionIds: number[];
  req: NextApiRequest;
  schemaId: number;
}) => {
  const { headers, url } = await getGraphQlVariables({
    req,
    schema: 'frontend',
  });

  const { errors, json } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/upsertGraphHubDeployedSchemaChunk',
    requestHeaders: headers,
    variables: {
      objects: chatCompletionOptionIds.map(
        (id): GraphHub_DeployedSchemaChunk_Insert_Input => ({
          apiReferenceData: '',
          bulkJobId,
          chatCompletionOptionId: id,
          deployedSchemaId: schemaId,
        })
      ),
    },
  });

  if (errors.length) {
    throw new Error(errors[0]?.message || '');
  }

  return json?.insert_graphHub_deployedSchemaChunk?.returning || [];
};
