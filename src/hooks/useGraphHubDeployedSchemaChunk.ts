import { usePaginate } from 'src/hooks/pagination/usePaginate';
import { useGraphQl } from 'src/hooks/useGraphQl';

export const useGraphHubDeployedSchemaChunk = () => {
  const { currentPage, handlePagination, limit, offset } = usePaginate({
    limit: 40,
  });
  const {
    data,
    isLoading,
    mutate: refetch,
  } = useGraphQl({
    endpoint: 'frontend/getGraphHubDeployedSchemaChunk',
    variables: { limit, offset },
  });

  return {
    currentPage,
    data,
    handlePagination,
    isLoading,
    limit,
    offset,
    refetch,
  };
};
