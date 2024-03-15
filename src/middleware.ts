import type { NextApiRequest } from 'next';
import { type NextRequest, NextResponse } from 'next/server';

import type { IUser } from 'src/types';
import { handleAuthentication } from 'src/utils/api';
import { jsonParse } from 'src/utils/jsonParse';

import { handleOptionsRequest } from './utils/api/handleOptionsRequest';

export type IMiddlewareHeaders = {
  'x-internal-middleware-user': IUser;
  'x-internal-middleware-user-token': { userToken: string };
};

const notAuthenticated = () =>
  new NextResponse(JSON.stringify({ message: 'Not authenticated' }), {
    headers: { 'content-type': 'application/json' },
    status: 401,
  });

export const middleware = async (req: NextRequest) => {
  if (req.method === 'OPTIONS') {
    return handleOptionsRequest(req);
  }

  const { isAuthorized, user, userToken } = await handleAuthentication(req);

  if (!isAuthorized || !userToken || !user) {
    return notAuthenticated();
  }

  const requestHeaders = new Headers(req.headers);

  // https://nextjs.org/docs/advanced-features/middleware#setting-headers
  requestHeaders.set(
    'x-internal-middleware-user-token',
    JSON.stringify({ userToken })
  );
  requestHeaders.set('x-internal-middleware-user', JSON.stringify(user));

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
};

// https://nextjs.org/docs/advanced-features/middleware#matcher
// https://nextjs.org/docs/messages/nested-middleware
export const config = {
  // Health endpoint needs to be public for service health checks
  matcher: '/api/((?!health).*)',
};

export const getMiddlewareHeader = <
  T extends keyof IMiddlewareHeaders & string
>({
  key,
  req,
}: {
  key: T;
  req: NextApiRequest | NextRequest;
}): IMiddlewareHeaders[T] => {
  const value =
    typeof req.headers.get === 'function'
      ? req.headers.get(key)
      : (req as NextApiRequest).headers[key];

  if (!value) {
    throw new Error(`Value for ${key} was not found`);
  }

  const parsedValue = jsonParse<IMiddlewareHeaders[T]>(value.toString());
  if (parsedValue) {
    return parsedValue;
  }
  throw new Error(`Cannot parse value for ${key} as JSON`);
};
