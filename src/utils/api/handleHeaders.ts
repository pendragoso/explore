import type { NextApiRequest, NextApiResponse } from 'next';

import { setCorsResponseHeaders } from './handleOptionsRequest';

export const handleHeaders = (req: NextApiRequest, res: NextApiResponse) => {
  setCorsResponseHeaders({ req, res });
  res.setHeader('content-type', 'application/json');
  res.setHeader('accept', req.headers.accept || 'application/json, text/html');
};
