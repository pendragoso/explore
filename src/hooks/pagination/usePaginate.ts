import { useCallback, useState } from 'react';

export const usePaginate = ({
  currentPage: _currentPage = 1,
  limit: _limit = 10,
}: {
  currentPage?: number;
  limit?: number;
}) => {
  const [currentPage, setCurrentPage] = useState(_currentPage);
  const [limit] = useState(_limit);
  const [offset, setOffset] = useState(currentPage * limit - limit);

  const handlePagination = useCallback(
    (page: number) => {
      const pageOffset = page * limit - limit;
      setOffset(pageOffset);
      setCurrentPage(page);
    },
    [limit]
  );

  return {
    currentPage,
    handlePagination,
    limit,
    offset,
  };
};
