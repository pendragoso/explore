import type { NextApiRequest } from 'next';

import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

export const getDraftSchemaChunkById = async ({
  chunkId,
  req,
}: {
  chunkId: number;
  req: NextApiRequest;
}) => {
  const { headers, url } = await getGraphQlVariables({
    req,
    schema: 'frontend',
  });

  const { errors, json } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/filterGraphHubDraftSchemaChunk',
    requestHeaders: headers,
    variables: {
      order_by: null,
      where: {
        id: {
          _eq: chunkId,
        },
      },
    },
  });

  if (errors.length) {
    throw new Error(errors[0]?.message);
  }

  return json?.graphHub_draftSchemaChunk || [];
};
