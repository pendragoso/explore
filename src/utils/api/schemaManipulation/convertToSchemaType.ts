import { GraphQLSchema } from 'graphql';
import { printSchema } from 'graphql/utilities';

export const convertToSchemaType = (schema: GraphQLSchema) =>
  printSchema(schema).replace(/^\s+/gm, '').trim();
