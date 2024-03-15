import type { NextApiRequest, NextApiResponse } from 'next';

import { buildSchema } from 'graphql';

import { GetSchemaFieldsRequest } from 'src/types';
import { handleHeaders } from 'src/utils/api';
import { jsonParse } from 'src/utils/jsonParse';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405);
    res.json('Invalid method');
    return;
  }

  const bodyJson = jsonParse(req.body);

  const parsedBody = GetSchemaFieldsRequest.safeParse(bodyJson);

  if (!parsedBody.success) {
    res.status(400).json(parsedBody.error.format());
    return;
  }

  const { schemaContent } = parsedBody.data;

  const content = buildSchema(schemaContent);
  const queryTypes = content.getQueryType();
  const queryFields = queryTypes?.getFields();
  const queryFieldNames = queryFields ? Object.keys(queryFields) : [];

  const mutationTypes = content.getMutationType();
  const mutationFields = mutationTypes?.getFields();
  const mutationFieldNames = mutationFields ? Object.keys(mutationFields) : [];

  handleHeaders(req, res);
  res.status(200);
  res.json({ mutationFieldNames, queryFieldNames });
};
export default handler;
