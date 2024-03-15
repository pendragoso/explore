import type { NextApiRequest } from 'next';

import { getMiddlewareHeader } from 'src/middleware';
import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

export const handleInsertDraftSchema = async ({
  req,
  schemaContent,
  schemaLabel,
}: {
  req: NextApiRequest;
  schemaContent: string;
  schemaLabel: string;
}) => {
  const user = getMiddlewareHeader({
    key: 'x-internal-middleware-user',
    req,
  });
  const { headers, url } = await getGraphQlVariables({
    req,
    schema: 'frontend',
  });

  const { errors, json } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/upsertGraphHubDraftSchema',
    requestHeaders: headers,
    variables: {
      objects: [
        {
          label: schemaLabel,
          schemaDefinition: schemaContent,
          userId: user.id,
        },
      ],
    },
  });

  if (errors.length) {
    throw new Error(errors[0]?.message || 'Error inserting draft schema');
  }

  const firstResult = json?.insert_graphHub_draftSchema?.returning[0];
  if (!firstResult) {
    throw new Error('Failed to insert a draft schema');
  }

  return firstResult;
};
