import { camelCaseConstant } from '../camelCaseConstant';

import { expect, test } from 'vitest';

test('Convert constant names to camelCase', () => {
  const content = `
  /** Options for where the credentials are stored. */
  export const CredentialProvider = {
    /** General use retail/published rates. */
    General: 'GENERAL',
    /** Organization-specific credentials. */
    Organization: 'ORGANIZATION',
  } as const;

  export type CredentialProvider =
    typeof CredentialProvider[keyof typeof CredentialProvider];`;
  expect(camelCaseConstant(content)).toMatchInlineSnapshot(`
    "
      /** Options for where the credentials are stored. */
      export const credentialProvider = {
        /** General use retail/published rates. */
        General: 'GENERAL',
        /** Organization-specific credentials. */
        Organization: 'ORGANIZATION',
      } as const;

      export type CredentialProvider =
        typeof credentialProvider[keyof typeof credentialProvider];"
  `);
});

test('Ignore the constant for gql', () => {
  const content = `
    export const RootOrderLandedCostBreakdownDocument = gql\`
    query RootOrderLandedCostBreakdown($root: ID!) {
      root(id: $root) {
        exchangeRates {
          sourceCurrencyCode
          targetCurrencyCode
          rate
        }
      }
    }
    \`;`;
  expect(camelCaseConstant(content)).toMatchInlineSnapshot(`
    "
        export const RootOrderLandedCostBreakdownDocument = gql\`
        query RootOrderLandedCostBreakdown($root: ID!) {
          root(id: $root) {
            exchangeRates {
              sourceCurrencyCode
              targetCurrencyCode
              rate
            }
          }
        }
        \`;"
  `);
});
