import type { NextApiRequest, NextApiResponse } from 'next';

import { BulkJobStatusRequest } from 'src/types';
import { handleHeaders } from 'src/utils/api';
import { checkStatus } from 'src/utils/api/bulkJobStatus/checkStatus';
import { jsonParse } from 'src/utils/jsonParse';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.json('Invalid method');
    return;
  }

  const bodyJson = jsonParse(req.body);

  const parsedBody = BulkJobStatusRequest.safeParse(bodyJson);

  if (!parsedBody.success) {
    res.status(400).json(parsedBody.error.format());
    return;
  }

  const { bulkJobId } = parsedBody.data;

  let result;
  try {
    result = await checkStatus(bulkJobId);
  } catch (error) {
    let errorMessage = 'Unknown error.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500);
    res.json(`Check status error: ${errorMessage}`);
    return;
  }

  handleHeaders(req, res);
  res.status(200);
  res.json(result);
};
export default handler;
