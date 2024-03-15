import type { NextApiRequest, NextApiResponse } from 'next';

import type { NextHandleFunction } from 'connect';

export const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: NextHandleFunction
) =>
  new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
