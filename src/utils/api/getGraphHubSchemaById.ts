import { GraphQLError } from 'graphql';

import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';
import { getFrontendGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

type ISchemaType = 'deployed' | 'draft';

type ISchemaReturn<TSchemaType extends ISchemaType = 'deployed'> =
  TSchemaType extends 'deployed'
    ? {
        errors: GraphQLError[];
        json: {
          createdAt: string;
          id: number;
          label: GraphHub_DeployedSchemaLabel_Enum;
          schemaDefinition: string | null;
          schemaType: TSchemaType;
          updatedAt: string;
          userId?: never;
        } | null;
      }
    : {
        errors: GraphQLError[];
        json: {
          createdAt: string;
          id: number;
          label: string;
          schemaDefinition: string | null;
          schemaType: TSchemaType;
          updatedAt: string;
          userId: string;
        } | null;
      };

/**
 * Get schema from GraphHub by schema id (either deployed or draft schema)
 */
export const getGraphHubSchemaById = async <
  TSchemaType extends ISchemaType = 'deployed'
>({
  schemaId,
  schemaType,
}: {
  schemaId: number;
  schemaType: TSchemaType;
}): Promise<ISchemaReturn<TSchemaType>> => {
  const { headers, url } = await getFrontendGraphQlVariables({
    req: null,
    user: null,
  });
  if (schemaType === 'draft') {
    // get draft schema
    const { errors, json } = await gqlRequest({
      customUrl: url,
      endpoint: 'frontend/getGraphHubDraftSchemaById',
      requestHeaders: headers,
      variables: { id: schemaId },
    });
    const firstItem = json?.graphHub_draftSchema[0];

    const result: ISchemaReturn<'draft'> = {
      errors,
      json: firstItem
        ? {
            ...firstItem,
            schemaType: 'draft',
          }
        : null,
    };

    // Typescript has problem with condition flow (if/else) with the conditional return type
    // so I set the type above to make sure it's correct and then cast it here
    return result as ISchemaReturn<TSchemaType>;
  }

  // get deployed schema
  const { errors, json } = await gqlRequest({
    customUrl: url,
    endpoint: 'frontend/getGraphHubDeployedSchemaById',
    requestHeaders: headers,
    variables: { id: schemaId },
  });

  const firstItem = json?.graphHub_deployedSchema[0];

  const result: ISchemaReturn<'deployed'> = {
    errors,
    json: firstItem
      ? {
          ...firstItem,
          schemaType: 'deployed',
        }
      : null,
  };

  // Typescript has problem with condition flow (if/else) with the conditional return type
  // so I set the type above to make sure it's correct and then cast it here
  return result as ISchemaReturn<TSchemaType>;
};
