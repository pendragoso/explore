/**
 * Format to readable format
 * @param datetime - A datetime string
 * @returns formated date (e.g. 2021-09-01 3:00 pm)
 */
export const formatDatetime = (datetime: string, timeZone?: string) => {
  if (!datetime) {
    return '';
  }
  const date = new Date(datetime);
  const datetimeFormatter = new Intl.DateTimeFormat('en-us', {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'numeric',
    timeZone,
    year: 'numeric',
  });
  const formattedDate = datetimeFormatter.format(date);
  // replace the `non-breaking space` character with regular space
  return formattedDate.replace(/\u202F/g, ' ');
};
