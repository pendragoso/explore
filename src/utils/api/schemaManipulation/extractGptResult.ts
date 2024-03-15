/**
 * 
 * @param response - response from openai
 * 
 * Response ex:
 * Query:
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

 */
export const extractGptResult = (response: string) => {
  // const queryMatch = /^((query|mutation)[\S\s]+)Variables:/gm.exec(response);
  // const variablesMatch = /Variables:[\s\S]*({[\S\s]+})/gm.exec(response);
  const queryMatch = /```graphql([\S\s]+?)```/gm.exec(response);
  const variablesMatch = /```json([\S\s]+?)```/gm.exec(response);

  const query = queryMatch?.[1]?.trim();
  const variables = variablesMatch?.[1]?.trim();
  return {
    query,
    variables,
  };
};
