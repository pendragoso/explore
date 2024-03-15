import {
  type GraphQLFieldConfigMap,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

export const extractTypes = ({
  isQuery,
  schemaType,
}: {
  isQuery: boolean;
  schemaType: GraphQLObjectType<unknown, unknown>;
}) => {
  const chunks: GraphQLSchema[] = [];
  const queryFields = schemaType.getFields();
  // Field key type for each action(Query and Mutation)
  const schemaFieldKeys = Object.keys(queryFields);
  // Loop through each field key
  schemaFieldKeys.forEach(fieldKey => {
    // Skip the field if it is a private field
    if (fieldKey.toString().startsWith('_')) {
      return;
    }

    const currentField = queryFields[fieldKey];
    if (currentField) {
      const args = currentField.args.reduce(
        (prev, arg) => ({
          ...prev,
          [arg.name]: {
            astNode: arg.astNode,
            defaultValue: arg.defaultValue,
            description: arg.description,
            extensions: arg.extensions,
            type: arg.type,
          },
        }),
        {}
      );
      const modifiedFields: GraphQLFieldConfigMap<unknown, unknown> = {
        [currentField.name]: {
          ...currentField,
          args,
        },
      };

      if (isQuery) {
        const modifiedQueryType = new GraphQLObjectType({
          fields: modifiedFields,
          name: 'Query',
        });
        const modifiedSchema = new GraphQLSchema({
          query: modifiedQueryType,
        });
        chunks.push(modifiedSchema);
      } else {
        const modifiedMutationType = new GraphQLObjectType({
          fields: modifiedFields,
          name: 'Mutation',
        });
        const modifiedSchema = new GraphQLSchema({
          mutation: modifiedMutationType,
        });
        chunks.push(modifiedSchema);
      }
    }
  });
  return chunks;
};
