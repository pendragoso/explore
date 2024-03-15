import type { NextApiRequest, NextApiResponse } from 'next';

import { handleHeaders } from './handleHeaders';

const handleFailedResponse = (response: Response) => {
  if (response.status === 404) {
    return {
      ...response,
      body: JSON.stringify([{ message: 'Not found', type: 'errorMessage' }]),
      status: 404,
    };
  }
  return response;
};

export const cleanProxyResponse = (response: Response) => {
  const { body, ok, status } = response;
  if (!ok) {
    return handleFailedResponse(response);
  }
  if (status === 204) {
    return { ...response, body: null, status };
  }
  return { ...response, body, status };
};

export const handleProxyResponse = async ({
  proxyResponse,
  req,
  res,
}: {
  proxyResponse: Response | null;
  req: NextApiRequest;
  res: NextApiResponse;
}) => {
  handleHeaders(req, res);

  if (proxyResponse) {
    const { body, status } = cleanProxyResponse(proxyResponse);

    if (body) {
      const X = await proxyResponse.json();
      res.status(status);
      res.send(X);
      res.end();
    } else if (!body) {
      res.status(status);
      res.end();
    }
  } else {
    res.status(400);
    res.end();
  }
};
