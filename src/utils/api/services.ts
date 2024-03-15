import type { NextApiRequest } from 'next';

import { getMiddlewareHeader } from 'src/middleware';
import { env } from 'src/utils/environment';

export const getAuthServiceToken = () => {
  const serviceToken = env.AUTH_REST_TOKEN;
  if (!serviceToken) {
    throw Error('Missing auth service token environment variable');
  }
  return serviceToken;
};

const getIGuserCookieHeader = (req: NextApiRequest) => {
  const { userToken } = getMiddlewareHeader({
    key: 'x-internal-middleware-user-token',
    req,
  });
  return {
    cookie: `IGuser=${userToken}`,
  };
};

const getAuthServiceTokenHeader = () => ({
  serviceToken: getAuthServiceToken(),
});

const getUrl = (serviceKey: IServiceKey) => {
  switch (serviceKey) {
    case 'address':
    case 'catalog':
    case 'classify':
    case 'elastic':
    case 'email':
    case 'order':
    case 'pay':
    case 'reports':
    case 'shipping':
    case 'store': {
      const url = env.INTERNAL_REST_URL;
      return `${url}/${serviceKey}`;
    }
    case 'auth': {
      const url = env.AUTH_REST_URL;
      return url;
    }
    default:
      throw Error(`getUrl - Unknown service key: ${serviceKey}`);
  }
};

export const getAuthHeader = ({
  req,
  serviceKey,
}: {
  req: NextApiRequest;
  serviceKey: IServiceKey;
}) => {
  switch (serviceKey) {
    case 'address':
    case 'catalog':
    case 'classify':
    case 'connect':
    case 'elastic':
    case 'email':
    case 'finance':
    case 'order':
    case 'pay':
    case 'reports':
    case 'shipping':
    case 'store':
      return getIGuserCookieHeader(req);

    case 'auth':
      return getAuthServiceTokenHeader();

    default:
      throw Error(`getAuthHeader - Unknown service key: ${serviceKey}`);
  }
};

export type IServiceKey =
  | 'address'
  | 'auth'
  | 'catalog'
  | 'checkout'
  | 'classify'
  | 'connect'
  | 'elastic'
  | 'email'
  | 'finance'
  | 'order'
  | 'pay'
  | 'reports'
  | 'shipping'
  | 'store';

export const getServiceUrl = (serviceKey: IServiceKey) => {
  const url = getUrl(serviceKey);
  if (!url) {
    throw Error(`Missing environment variable for ${serviceKey} service`);
  }
  return url;
};
