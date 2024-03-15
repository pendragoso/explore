import type { NextApiRequest, NextApiResponse } from 'next';

import { GraphQLSchema } from 'graphql';

import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';
import { handleHeaders } from 'src/utils/api';
import { getDeployedSchemaJson } from 'src/utils/api/getDeployedSchemaJson';
import { convertToSchemaType } from 'src/utils/api/schemaManipulation/convertToSchemaType';
import { extractAndConvertSchema } from 'src/utils/api/schemaManipulation/extractAndConvertSchema';
import { getFieldName } from 'src/utils/api/schemaManipulation/getFieldName';
import { processSchema } from 'src/utils/api/schemaManipulation/processSchema';
import { docGenerationPrompt } from 'src/utils/api/schemaManipulation/prompts/docGenerationPrompt';

// wait to process each schema to avoid OpenAI rate limit
const process = async ({
  schema,
  schemaData,
  timeout,
  type,
}: {
  schema: GraphHub_DeployedSchemaLabel_Enum;
  schemaData: GraphQLSchema;
  timeout: number;
  type: 'query' | 'mutation';
}) =>
  new Promise(resolve => {
    setTimeout(async () => {
      const fieldName = getFieldName({
        schema: schemaData,
        type,
      });
      const schemaTypes = convertToSchemaType(schemaData);
      await processSchema({
        chatHistories: [
          {
            content: `Here is the schema type definition, consume it and wait for further instruction:\n${schemaTypes}`,
            role: 'user',
          },
          {
            content: docGenerationPrompt,
            role: 'user',
          },
        ],
        fieldName,
        schema,
      });
      resolve(1);
    }, timeout);
  });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const schema = req.query.schema as GraphHub_DeployedSchemaLabel_Enum;

  const { errors, json: schemaQuery } = await getDeployedSchemaJson({
    req,
    schema,
  });

  if (!schemaQuery || errors.length) {
    throw new Error('No schema found');
  }

  const extractedSchema = extractAndConvertSchema({ schema: schemaQuery });

  const querySchemas = extractedSchema.chunkedQuerySchema;
  const mutationSchemas = extractedSchema.chunkedMutationSchema;

  // Writting query schema types and schema docs
  await Promise.all(
    querySchemas.map(async (querySchema, index) =>
      process({
        schema,
        schemaData: querySchema,
        timeout: index * 10000,
        type: 'query',
      })
    )
  );

  console.info('== Done writing query schema types');
  // Writing mutation schema types and schema docs
  await Promise.all(
    mutationSchemas.map(async (mutationSchema, index) =>
      process({
        schema,
        schemaData: mutationSchema,
        timeout: index * 10000,
        type: 'mutation',
      })
    )
  );

  console.info('== Done writing mutation schema types');
  handleHeaders(req, res);
  res.status(200);
  res.json('Done writting schema docs and types');
};

export default handler;
