import capitalize from 'lodash/capitalize';

import { useGraphQl } from 'src/hooks/useGraphQl';
import { useUser } from 'src/hooks/useUser';
import { formatDatetime } from 'src/utils/formatDatetime';

export const useGraphHubSchema = () => {
  const { user } = useUser();
  const { data, isLoading } = useGraphQl({
    endpoint: 'frontend/getGraphHubSchema',
    variables: {
      draftSchemaOrderBy: {
        updatedAt: 'desc',
      },
      draftSchemaWhere: user?.id
        ? {
            userId: {
              _eq: user.id,
            },
          }
        : null,
    },
  });

  const deployedSchemas = data?.json?.graphHub_deployedSchema || [];
  const draftSchemas = data?.json?.graphHub_draftSchema || [];

  const deployedSchemaOptions = deployedSchemas.map(schema => ({
    label: capitalize(schema.label),
    value: schema.id,
  }));

  const draftSchemaOptions = draftSchemas.map(schema => ({
    label: `${capitalize(schema.label)} (${formatDatetime(schema.updatedAt)})`,
    value: schema.id,
  }));

  return {
    deployedSchemaOptions,
    deployedSchemas,
    draftSchemaOptions,
    draftSchemas,
    isLoading,
  };
};
