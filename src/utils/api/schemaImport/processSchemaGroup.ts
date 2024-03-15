import type { ISchema } from './handleBulkChatBotRequest';

/**
 * Process schema group and separate them into group of queries and mutations
 */
export const processSchemaGroup = ({
  schemaGroup,
}: {
  schemaGroup: ISchema[];
}) => {
  const querySchemas = schemaGroup
    .filter(schema => schema.schemaType === 'query')
    .map(schema => schema.schema);
  const mutationSchemas = schemaGroup
    .filter(schema => schema.schemaType === 'mutation')
    .map(schema => schema.schema);
  return {
    mutationSchemas,
    querySchemas,
  };
};
