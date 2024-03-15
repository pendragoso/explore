import type { NextApiRequest } from 'next';

import { type IServiceKey, getAuthHeader, getServiceUrl } from './services';

export const prepUrl = (req: NextApiRequest) => {
  const [, , key, ...rest] = req.url?.split('/') || [];
  const serviceKey = key as IServiceKey;
  const serviceUrl = getServiceUrl(serviceKey);
  return { serviceKey, url: `${serviceUrl}/${rest.join('/')}` };
};

export const handleFetch = async (req: NextApiRequest) => {
  const { serviceKey, url } = prepUrl(req);
  const authHeader = getAuthHeader({ req, serviceKey });
  const body = req.body || undefined;
  const options: RequestInit = {
    body: req.method === 'GET' ? undefined : body,
    headers: {
      ...authHeader,
      accept: req.headers.accept || 'application/json',
      'content-type': 'application/json',
    },
    method: req.method,
  };
  return fetch(url, options);
};
