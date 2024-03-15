import { useGraphQl } from 'src/hooks/useGraphQl';
import type { GraphHub_DeployedSchemaLabel_Enum } from 'src/types/generated/graphql.frontend.types';

export type IGraphHubDeployedInstance = {
  categoryId: number;
  createdAt: string;
  deployedSchema: {
    id: number;
    label: GraphHub_DeployedSchemaLabel_Enum;
    schemaDefinition: string | null;
  };
  deployedSchemaId: number;
  id: number;
  query: string;
  updatedAt: string;
  variables: string;
};

type IGraphHubProps = {
  deployedGraphHubId: number | null;
  deployedInstance: IGraphHubDeployedInstance | null;
  isLoading: boolean;
};

export const useGraphHubDeployedInstance = ({
  deployedGraphHubId,
}: {
  deployedGraphHubId: number | null;
}): IGraphHubProps => {
  /** No need to revalidate for this since this is just a instance record */
  const { data, isLoading } = useGraphQl(
    deployedGraphHubId
      ? {
          endpoint: 'frontend/getGraphHubDeployedInstance',
          variables: {
            id: deployedGraphHubId,
          },
        }
      : null,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const deployedInstance = data?.json?.graphHub_deployedInstance_by_pk || null;

  return {
    deployedGraphHubId,
    deployedInstance,
    isLoading,
  };
};
