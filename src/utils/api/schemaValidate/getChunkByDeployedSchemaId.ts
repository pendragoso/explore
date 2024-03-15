import type { NextApiRequest } from 'next';

import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

export const getChunkByDeployedSchemaId = async ({
  deployedSchemaId,
  req,
}: {
  deployedSchemaId: number;
  req: NextApiRequest;
}) => {
  const { headers, url } = await getGraphQlVariables({
    req,
    schema: 'frontend',
  });

  const { errors, json } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/filterGraphHubDeployedSchemaChunk',
    requestHeaders: headers,
    variables: {
      order_by: null,
      where: {
        deployedSchemaId: {
          _eq: deployedSchemaId,
        },
      },
    },
  });

  if (errors.length) {
    throw new Error(errors[0]?.message);
  }

  return json?.graphHub_deployedSchemaChunk || [];
};
