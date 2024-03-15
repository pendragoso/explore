import type { NextApiRequest, NextApiResponse } from 'next';

import { existsSync, mkdirSync, writeFileSync } from 'fs';

import { GenerateEmbeddingsRequest } from 'src/types';
import { handleHeaders } from 'src/utils/api';
import { prepareEmbeddings } from 'src/utils/api/generateEmbeddings/prepareEmbeddings';
import { getDeployedSchemaJson } from 'src/utils/api/getDeployedSchemaJson';

const writeEmbeddingsFile = async ({
  content,
  schema,
}: {
  content: string;
  schema: 'auth' | 'customer' | 'internal';
}) => {
  const folderPath = `${process.cwd()}/src/types/generated/${schema}/embeddings`;
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath, { recursive: true });
  }
  const filePath = `${folderPath}/documents.json`;
  writeFileSync(filePath, content, {
    encoding: 'utf-8',
    flag: 'w',
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const parsedBody = GenerateEmbeddingsRequest.safeParse(req.query);

  if (!parsedBody.success) {
    res.status(400).json(parsedBody.error.format());
    return;
  }

  const { schema } = parsedBody.data;

  const { json: introspectionQuery } = await getDeployedSchemaJson({
    req,
    schema,
  });

  if (!introspectionQuery) {
    res.status(400);
    res.json('No schema instrospection found.');
    return;
  }

  const promiseResults = prepareEmbeddings({
    introspectionQuery,
    schemaLabel: schema,
  });

  await writeEmbeddingsFile({
    content: JSON.stringify(promiseResults),
    schema,
  });

  handleHeaders(req, res);
  res.status(200);
  res.json(promiseResults);
}
