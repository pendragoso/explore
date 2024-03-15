/**
 * Pick a random percentage of records from an array
 */
export const getRandomPercentageRecords = <T>(
  array: T[],
  percentage: number
): T[] => {
  const count = Math.ceil((percentage / 100) * array.length);
  const shuffled = array.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
