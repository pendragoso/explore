import { GraphQLSchema } from 'graphql';

import { getFieldName } from 'src/utils/api/schemaManipulation/getFieldName';

/**
 * This function takes a schema and returns an array of schemas group with detailed information.
 */
export const preparePaginateChunkSchema = ({
  chunkSchemas,
  schemaType,
}: {
  chunkSchemas: GraphQLSchema[];
  schemaType: 'query' | 'mutation';
}): {
  fieldName: string;
  schema: GraphQLSchema;
  schemaType: 'query' | 'mutation';
}[] =>
  chunkSchemas.map(schema => ({
    fieldName: getFieldName({
      schema,
      type: schemaType,
    }),
    schema,
    schemaType,
  }));
