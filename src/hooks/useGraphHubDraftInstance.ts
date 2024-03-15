import { useGraphQl } from 'src/hooks/useGraphQl';

type IGraphHubDraftInstance = {
  categoryId: number;
  createdAt: string;
  draftSchema: {
    id: number;
    label: string;
    schemaDefinition: string;
  };
  draftSchemaId: number;
  id: number;
  query: string;
  updatedAt: string;
  variables: string;
};

type IGraphHubProps = {
  draftGraphHubId: number | null;
  draftInstance: IGraphHubDraftInstance | null;
  isLoading: boolean;
};

export const useGraphHubDraftInstance = ({
  draftGraphHubId,
}: {
  draftGraphHubId: number | null;
}): IGraphHubProps => {
  /** No need to revalidate for this since this is just a instance record */
  const { data, isLoading } = useGraphQl(
    draftGraphHubId
      ? {
          endpoint: 'frontend/getGraphHubDraftInstance',
          variables: {
            id: draftGraphHubId,
          },
        }
      : null
  );

  const draftInstance = data?.json?.graphHub_draftInstance_by_pk || null;

  return {
    draftGraphHubId,
    draftInstance,
    isLoading,
  };
};
