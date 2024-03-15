import type { NextApiRequest, NextApiResponse } from 'next';

import { getMiddlewareHeader } from 'src/middleware';
import { handleHeaders } from 'src/utils/api';

// Handled in middleware
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = getMiddlewareHeader({ key: 'x-internal-middleware-user', req });
  handleHeaders(req, res);
  res.status(200);
  res.send(user);
};

export default handler;
