import fs from 'fs';
import { type IntrospectionQuery, buildClientSchema } from 'graphql';

import { jsonParse } from 'src/utils/jsonParse';

import { extractTypes } from './extractTypes';

// Read and parse the GraphQL schema JSON
const readGraphQLSchemaJson = (filePath: string): IntrospectionQuery => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const parsedJson = jsonParse<IntrospectionQuery>(data);
  if (!parsedJson) {
    throw new Error('Unable to parse schema JSON');
  }
  return parsedJson;
};

// Use schema if it is provided, otherwise use schemaPath
type SchemaProps =
  | { schema?: never; schemaPath: string }
  | { schema: IntrospectionQuery; schemaPath?: never };

/**
 * Chunk the schema to multiple small query and mutation schema
 */
export const extractAndConvertSchema = ({
  schema: _schema,
  schemaPath,
}: SchemaProps) => {
  const schemaContent = schemaPath ? readGraphQLSchemaJson(schemaPath) : null;
  const schema = _schema || schemaContent;
  if (!schema) {
    throw new Error('No schema found.');
  }
  const schemaObj = buildClientSchema(schema);
  const querySchema = schemaObj.getQueryType();
  const chunkedQuerySchema = querySchema
    ? extractTypes({ isQuery: true, schemaType: querySchema })
    : [];

  const mutationSchema = schemaObj.getMutationType();
  const chunkedMutationSchema = mutationSchema
    ? extractTypes({ isQuery: false, schemaType: mutationSchema })
    : [];

  return {
    chunkedMutationSchema,
    chunkedQuerySchema,
  };
};
