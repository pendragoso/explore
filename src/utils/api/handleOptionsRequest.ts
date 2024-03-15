import type { NextApiRequest, NextApiResponse } from 'next';
import { type NextRequest, NextResponse } from 'next/server';

export type ICorsOptions = {
  exposedHeaders?: string;
  origin?: string | RegExp | (string | RegExp)[];
};

export const getIsAllowedOrigin = (requestOrigin: string | null) => {
  if (!requestOrigin) {
    return false;
  }
  const isAllowedOrigin = (originItem: string | RegExp) => {
    if (typeof originItem === 'string') {
      return originItem === requestOrigin;
    }
    return originItem.test(requestOrigin);
  };

  return [
    /\.zonos\.com$/,
    /\.zonos\.com:\d+$/, // local development ports
  ].some(isAllowedOrigin);
};

export const handleOptionsRequest = (req: NextRequest) => {
  const requestOrigin = req.headers.get('origin');
  const isAllowedOrigin = getIsAllowedOrigin(requestOrigin);
  const allowOrigin = isAllowedOrigin && requestOrigin ? requestOrigin : '';

  const allowedHeaders = req.headers.get('access-control-request-headers');
  const headers = {
    'access-control-allow-headers': allowedHeaders || '',
    'access-control-allow-methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'access-control-allow-origin': allowOrigin,
    'access-control-request-headers': allowedHeaders || '',
    'content-length': '0',
    vary: 'origin',
  };
  return new NextResponse(null, {
    headers: new Headers(headers),
    status: 204,
  });
};

export const setCorsResponseHeaders = ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  res.setHeader('access-control-allow-origin', req.headers.origin || '');
  res.setHeader('vary', 'origin');
};
