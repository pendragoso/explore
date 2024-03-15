import {
  type IntrospectionQuery,
  buildSchema,
  getIntrospectionQuery,
  graphqlSync,
} from 'graphql';

const placeholderQuery = `type Query { _placeholder: String }`;

export const convertToInstrospectionQuery = ({
  graphqlsContent,
}: {
  graphqlsContent: string | null;
}) => {
  const isValidSchema =
    graphqlsContent && graphqlsContent.includes('type Query');
  let validGraphqlContent = graphqlsContent || '';
  if (!isValidSchema) {
    // `buildSchema` requires `Query` exists, so we added a "_placeholder" query to make it valid schema
    validGraphqlContent = `${placeholderQuery}\n${graphqlsContent}`;
  }
  const schema = buildSchema(validGraphqlContent);
  const introspectionQuery = getIntrospectionQuery();
  const result = graphqlSync({ schema, source: introspectionQuery });
  return result.data as unknown as IntrospectionQuery | null;
};
