import type { NextApiRequest, NextApiResponse } from 'next';

import { getProxyResponseBody, handleHeaders } from 'src/utils/api';
import { env } from 'src/utils/environment';

type IGraphQlResponse = {
  [key: string]: unknown;
  errors: [];
  id?: string | number;
};

const getCredentialTokenForAuthRequest = (req: NextApiRequest) => {
  if (req.url?.endsWith('loginLegacy')) {
    return env.INTERNAL_GRAPH_TOKEN;
  }
  const { credentialtoken } = req.headers;
  const credentialToken =
    typeof credentialtoken === 'string' ? credentialtoken : '';
  return credentialToken;
};

export const handleAuthGraphQlRequest = async ({
  req,
  res,
  url,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  url: string;
}) => {
  const proxyResponse = await fetch(url, {
    body: typeof req.body === 'object' ? JSON.stringify(req.body) : req.body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentialToken: getCredentialTokenForAuthRequest(req),
      senderCredential: env.AUTH_GRAPH_TOKEN,
    },
    method: req.method,
  });

  handleHeaders(req, res);

  if (proxyResponse.ok) {
    const json = await getProxyResponseBody<IGraphQlResponse>(proxyResponse);
    res.status(proxyResponse.status);
    res.send(json);
  } else {
    res.status(proxyResponse.status);
    res.end();
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = env.AUTH_GRAPH_URL;

  await handleAuthGraphQlRequest({
    req,
    res,
    url,
  });
};

export default handler;
