import { describe, expect, test } from 'vitest';

import { formatDatetime } from 'src/utils/formatDatetime';

describe('Format to readable date and time', () => {
  test('Empty string', () => {
    expect(formatDatetime('')).toBe('');
  });
  test('Format iso date time to full date', () => {
    expect(
      formatDatetime('2023-05-29T21:35:14.886036+00:00', 'UTC')
    ).toMatchInlineSnapshot('"5/29/2023, 9:35 PM"');
  });
});
