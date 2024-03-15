import range from 'lodash/range';

/**
 * Paginate array of nodes
 * @param nodes - Array of nodes
 * @param offset - Number of nodes per page (default: 90)
 * @returns
 */
export const paginateArray = <T extends unknown>(
  nodes: T[],
  offset: number = 90
): T[][] => {
  const indexArray = range(0, nodes.length, offset);
  const paginatedNodes = indexArray.map(index =>
    nodes.slice(index, offset + index)
  );
  return paginatedNodes;
};
