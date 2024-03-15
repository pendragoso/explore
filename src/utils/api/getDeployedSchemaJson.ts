import type { NextApiRequest } from 'next';
import type { NextRequest } from 'next/server';

import type { IntrospectionQuery } from 'graphql';

import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';
import { getGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

const getStoredSchema = async (schema: GraphHub_DeployedSchemaLabel_Enum) => {
  switch (schema) {
    case 'auth': {
      return import('src/types/generated/graphql.auth.schema.json');
    }
    case 'customer': {
      return import('src/types/generated/graphql.customer.schema.json');
    }
    case 'internal': {
      return import('src/types/generated/graphql.internal.schema.json');
    }
    case 'frontend': {
      return import('src/types/generated/graphql.frontend.schema.json');
    }
    case 'viewport': {
      return import('src/types/generated/graphql.viewport.schema.json');
    }
    case 'weaviate': {
      return import('src/types/generated/graphql.weaviate.schema.json');
    }
    default:
      return null;
  }
};
export const getDeployedSchemaJson = async ({
  req,
  schema,
}: {
  req: NextApiRequest | NextRequest;
  schema: GraphHub_DeployedSchemaLabel_Enum;
}) => {
  const graphQlVariables = await getGraphQlVariables({ req, schema });

  const { errors, json } = await gqlRequest({
    customUrl: graphQlVariables.url,
    endpoint: `${schema}/getSchema`,
    requestHeaders: {
      ...graphQlVariables.headers,
      'x-apollo-operation-name': 'getSchema',
    },
  });
  // here is safe to assure that the storedSchema is an IntrospectionQuery
  const jsonResult = json as unknown as IntrospectionQuery;
  if (errors.length) {
    console.info('get stored schema');
    const storedSchema = await getStoredSchema(schema);
    if (storedSchema) {
      // here is safe to assure that the storedSchema is an IntrospectionQuery
      return {
        errors: [],
        json: storedSchema.default as unknown as IntrospectionQuery,
      };
    }
    return { errors, json: null };
  }
  return { errors: [], json: jsonResult };
};
