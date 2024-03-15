import type { NextApiRequest } from 'next';

import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';
import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

export const handleInsertDeployedSchema = async ({
  req,
  schemaContent,
  schemaLabel,
}: {
  req: NextApiRequest;
  schemaContent: string;
  schemaLabel: GraphHub_DeployedSchemaLabel_Enum;
}) => {
  const { headers, url } = await getGraphQlVariables({
    req,
    schema: 'frontend',
  });

  const { errors, json } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/upsertGraphHubDeployedSchema',
    requestHeaders: headers,
    variables: {
      objects: [
        {
          label: schemaLabel,
          schemaDefinition: schemaContent,
        },
      ],
    },
  });

  if (errors.length) {
    throw new Error(errors[0]?.message || 'Error inserting deployed schema');
  }

  const firstResult = json?.insert_graphHub_deployedSchema?.returning[0];
  if (!firstResult) {
    throw new Error('Failed to insert a deployed schema');
  }

  return firstResult;
};
