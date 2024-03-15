import type { NextApiRequest, NextApiResponse } from 'next';

import { handleFetch, handleProxyResponse } from 'src/utils/api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.error(`Proxied an unidentified path: ${req.url}`);

  const proxyResponse = await handleFetch(req);
  await handleProxyResponse({ proxyResponse, req, res });
};

export default handler;
