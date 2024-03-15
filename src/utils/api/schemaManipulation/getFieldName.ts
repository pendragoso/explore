import { GraphQLSchema } from 'graphql';

/**
 * Get the first field name of a schema query or mutation from a GraphQL schema
 */
export const getFieldName = ({
  schema,
  type,
}: {
  schema: GraphQLSchema;
  type: 'mutation' | 'query';
}) => {
  const actionType =
    type === 'query' ? schema.getQueryType() : schema.getMutationType();
  const fields = actionType?.getFields();
  if (!fields) {
    throw new Error('No fields');
  }
  const fieldName = Object.keys(fields)[0]?.toString() || '';
  return fieldName;
};
