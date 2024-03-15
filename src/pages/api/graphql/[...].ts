import type { NextApiRequest, NextApiResponse } from 'next';

import { handleGraphQlRequest } from 'src/utils/api/handleGraphQlRequest';
import type { ISchema } from 'src/utils/gqlRequest';

const parseSchema = (req: NextApiRequest): ISchema => {
  const [, , , schema] = req.url?.split('/') || [];
  // Strip out the query part in the url. This doesn't happen in local dev, but does in prod. Not sure why.
  // ex: Accessing route is `api/graphql/internal` but the url is `api/graphql/internal?nextParams=internal` in Vercel
  if (schema?.includes('?')) {
    return schema.split('?')[0] as ISchema;
  }

  return schema as ISchema;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const schema = parseSchema(req);

  await handleGraphQlRequest({
    req,
    res,
    schema,
  });
};

export default handler;
