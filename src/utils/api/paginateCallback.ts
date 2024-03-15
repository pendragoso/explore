import { paginateArray } from 'src/utils/api/paginateArray';

export const paginateCallback = async <T>({
  arrayToPaginate,
  callback,
  offset,
}: {
  arrayToPaginate: T[];
  /**
   * Offset for pagination
   * @default 90
   */
  offset?: number;
  callback: (chunk: T[]) => void;
}) => {
  // Group two schemas and paginate them
  const paginatedGroup = paginateArray(arrayToPaginate, offset);
  return Promise.allSettled(paginatedGroup.map(async group => callback(group)));
};
