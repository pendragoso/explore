import { useCallback, useEffect, useState } from 'react';

import { usePaginate } from 'src/hooks/pagination/usePaginate';
import { preloadGqlRequest, useGraphQl } from 'src/hooks/useGraphQl';
import { useJobStatusCheck } from 'src/hooks/useJobStatusCheck';

export const useGraphHubDraftSchemaChunk = () => {
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const { currentPage, handlePagination, limit, offset } = usePaginate({
    limit: 100,
  });
  const {
    data,
    isLoading,
    mutate: refetch,
  } = useGraphQl({
    endpoint: 'frontend/getGraphHubDraftSchemaChunk',
    variables: { limit, offset },
  });

  useJobStatusCheck({
    data: data?.json?.graphHub_draftSchemaChunk || [],
    refetch,
  });

  const handlePrefetchNextPage = useCallback(async () => {
    const nextOffset = offset + limit;
    const result = await preloadGqlRequest({
      endpoint: 'frontend/getGraphHubDraftSchemaChunk',
      variables: { limit, offset: nextOffset },
    });

    const _hasNextPage =
      !!result.json?.graphHub_draftSchemaChunk.length && !result.errors.length;

    // set the state of the next page to true if there is a next page and no errors
    setHasNextPage(_hasNextPage);
  }, [limit, offset]);

  const handlePrefetchPreviousPage = useCallback(async () => {
    const previousOffet = offset - limit;
    if (previousOffet < 0) {
      // set the state of the previous page to false if there is no previous page
      setHasPreviousPage(false);
      return;
    }
    const result = await preloadGqlRequest({
      endpoint: 'frontend/getGraphHubDraftSchemaChunk',
      variables: { limit, offset: previousOffet },
    });
    const _hasPreviousPage =
      !!result.json?.graphHub_draftSchemaChunk.length && !result.errors.length;
    // set the state of the next page to true if there is a next page and no errors
    setHasPreviousPage(_hasPreviousPage);
  }, [limit, offset]);

  useEffect(() => {
    handlePrefetchNextPage();
    handlePrefetchPreviousPage();
  }, [offset, handlePrefetchNextPage, handlePrefetchPreviousPage]);

  return {
    currentPage,
    data,
    handlePagination,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    limit,
    offset,
    refetch,
  };
};
