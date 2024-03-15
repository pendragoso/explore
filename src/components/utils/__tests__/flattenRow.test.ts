import { expect, test } from 'vitest';

import { flattenRow } from '../flattenRow';

test('flatten table row data', () => {
  const tableDataArr = [
    {
      aggregate: {
        count: 2,
        max: {
          created_at: '2010-04-20T23:06:44',
          duties: 0,
          fees: 0,
        },
      },
      nodes: [
        {
          created_at: '2010-04-20T23:06:44',
          duties: 0,
          fees: 0,
          items: 15.54,
          shipping: 35,
          taxes: 0,
        },
        {
          created_at: '2010-04-20T23:06:44',
          duties: 0,
          fees: 0,
          items: 15.54,
          shipping: 84,
          taxes: 0,
        },
      ],
    },
  ];
  const t = tableDataArr.map((item): Record<string, string> => {
    const row = Object.entries(item).reduce(
      (prev, currentVal) =>
        flattenRow({
          currentVal,
          prev,
        }),
      {}
    );
    return row;
  });

  expect(t).toMatchInlineSnapshot(`
    [
      {
        "aggregate.count": 2,
        "aggregate.created_at.created_at": "2010-04-20T23:06:44",
        "aggregate.duties.duties": 0,
        "aggregate.fees.fees": 0,
        "nodes": "[{\\"created_at\\":\\"2010-04-20T23:06:44\\",\\"duties\\":0,\\"fees\\":0,\\"items\\":15.54,\\"shipping\\":35,\\"taxes\\":0},{\\"created_at\\":\\"2010-04-20T23:06:44\\",\\"duties\\":0,\\"fees\\":0,\\"items\\":15.54,\\"shipping\\":84,\\"taxes\\":0}]",
      },
    ]
  `);
});
