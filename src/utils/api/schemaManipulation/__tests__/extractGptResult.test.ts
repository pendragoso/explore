import { describe, expect, test } from 'vitest';

import { extractGptResult } from 'src/utils/api/schemaManipulation/extractGptResult';

describe('extractGptResult', () => {
  test('should extract query and variables', () => {
    const response = `Operation Type: Query
\`\`\`graphql
query getUsers($after: String, $filter: UserFilter, $first: Int) {
    users(after: $after, filter: $filter, first: $first) {
    edges {
        node {
        id
        email
        status
        createdAt
        updatedAt
        }
    }
    pageInfo {
        hasNextPage
        endCursor
    }
    }
}
\`\`\`

Variables:
\`\`\`json
{
    "after": null,
    "filter": {
    "email": null,
    "status": null,
    "userId": null
    },
    "first": 10
}
\`\`\`
        `;
    expect(extractGptResult(response)).toMatchInlineSnapshot(`
      {
        "query": "query getUsers($after: String, $filter: UserFilter, $first: Int) {
          users(after: $after, filter: $filter, first: $first) {
          edges {
              node {
              id
              email
              status
              createdAt
              updatedAt
              }
          }
          pageInfo {
              hasNextPage
              endCursor
          }
          }
      }",
        "variables": "{
          \\"after\\": null,
          \\"filter\\": {
          \\"email\\": null,
          \\"status\\": null,
          \\"userId\\": null
          },
          \\"first\\": 10
      }",
      }
    `);
  });

  test('should extract query and variables with mutation', () => {
    const response = `Mutation:
\`\`\`graphql
mutation CreateUser($input: UserCreateInput!) {
    userCreate(input: $input) {
    id
    email
    }
}
\`\`\`
Variables:
\`\`\`json
{
    "input": {
    "email": "thien@zonos.com",
    "password": "<your_password>",
    "organizationIds": [],
    "multiFactorAuthentication": null,
    "multiFactorAuthenticationPhone": null,
    "onBoarding": false
    }
}
\`\`\`
`;
    expect(extractGptResult(response)).toMatchInlineSnapshot(`
      {
        "query": "mutation CreateUser($input: UserCreateInput!) {
          userCreate(input: $input) {
          id
          email
          }
      }",
        "variables": "{
          \\"input\\": {
          \\"email\\": \\"thien@zonos.com\\",
          \\"password\\": \\"<your_password>\\",
          \\"organizationIds\\": [],
          \\"multiFactorAuthentication\\": null,
          \\"multiFactorAuthenticationPhone\\": null,
          \\"onBoarding\\": false
          }
      }",
      }
    `);
  });

  test('should extract query and variables with query inside a bracket', () => {
    const response = `Operation Type:
query

Query:
\`\`\`graphql
query getUsers($after: String, $filter: UserFilter, $first: Int) {
  users(after: $after, filter: $filter, first: $first) {
    edges {
      node {
        id
        email
        status
        createdAt
        updatedAt
        lastLoginAt
        multiFactorAuthentication
        multiFactorAuthenticationPhone
        organizations
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
\`\`\`

Variables:
\`\`\`json
{
  "after": null,
  "filter": null,
  "first": 10
}
\`\`\`
`;
    expect(extractGptResult(response)).toMatchInlineSnapshot(`
      {
        "query": "query getUsers($after: String, $filter: UserFilter, $first: Int) {
        users(after: $after, filter: $filter, first: $first) {
          edges {
            node {
              id
              email
              status
              createdAt
              updatedAt
              lastLoginAt
              multiFactorAuthentication
              multiFactorAuthenticationPhone
              organizations
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }",
        "variables": "{
        \\"after\\": null,
        \\"filter\\": null,
        \\"first\\": 10
      }",
      }
    `);
  });
});
