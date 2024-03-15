import type { NextApiRequest, NextApiResponse } from 'next';

import type { IGraphQlResponse } from 'src/types';
import type { ISchema } from 'src/utils/gqlRequest';

import { getGraphQlVariables } from './getGraphQlVariables';
import { handleHeaders } from './handleHeaders';

const getProxyResponseBody = async <TResponseBody extends unknown>(
  response: Response | null
) => {
  if (response) {
    const json = await response.json<TResponseBody>();
    return json;
  }
  return null;
};

const handleGraphQlResponse = async ({
  proxyResponse,
  res,
}: {
  proxyResponse: Response;
  res: NextApiResponse;
}) => {
  if (proxyResponse.ok) {
    const json = await getProxyResponseBody<IGraphQlResponse>(proxyResponse);
    if (json?.errors) {
      res.status(proxyResponse.status);
      res.send(json);
    } else {
      res.status(proxyResponse.status);
      res.json(json);
    }
  } else {
    res.status(proxyResponse.status);
    res.end();
  }
};

export const handleGraphQlRequest = async ({
  req,
  res,
  schema,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  schema: ISchema;
}) => {
  const { allowMutation, headers, url } = await getGraphQlVariables({
    req,
    schema,
  });

  const body =
    typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;

  const hasMutation = body.includes('mutation');

  if (hasMutation && !allowMutation) {
    res.json('Mutation not allowed');
    res.status(403);
    res.end();
    return;
  }

  const options: RequestInit = {
    body: body as BodyInit,
    headers,
    method: req.method,
  };

  const proxyResponse = await fetch(url, options);

  handleHeaders(req, res);

  await handleGraphQlResponse({ proxyResponse, res });
};
