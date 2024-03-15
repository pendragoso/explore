export const searchRelevantSchemaBasePrompt = (instruction: string) =>
  `FOLLOW the instruction: <${instruction}>` as const;

export const searchRelevantSchemaPrompt = `
Ex 1:
<SchemaDefinition>
${searchRelevantSchemaBasePrompt('Get a list of user')}
Query example:
\`\`\`graphql
query getUsers($after: String, $filter: UserFilter, $first: Int) {
  users(after: $after, filter: $filter, first: $first) {
    edges {
      cursor
      node {
        ...userFields
      }
    }
    pageInfo {
      ...pageInfoFields
    }
  }
}
fragment userFields on User {
  id
  email
  status
  createdAt
  updatedAt
}
fragment pageInfoFields on PageInfo {
  hasPreviousPage
  hasNextPage
  endCursor
  startCursor
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
##
Ex 2:
<SchemaDefinition>
${searchRelevantSchemaBasePrompt('Create a credential with name Zonos')}}
Mutation example:
\`\`\`graphql
mutation createCredential($createCredentialInput: CreateCredentialInput!) {
  createCredential(createCredentialInput: $createCredentialInput) {
    ...CredentialFragment
  }
}

fragment CredentialFragment on Credential {
  id
  createdAt
  createdBy
  expiredAt
  lastUsedAt
  mode
  name
  organization
  user
  multiFactorAuthenticated
  roles
  assignableRoles
  type
  updatedAt
  updatedBy
}
\`\`\`
Variables:
\`\`\`json
{
  "input": {
    "name": "Zonos",
    "mode": "LIVE",
    "organization": "<organization_id>",
    "expiredAt": "2021-10-10T00:00:00.000Z",
    "roles": ["<role_id>"],
    "assignableRoles": null,
    "type": "SERVICE_TOKEN",
    "user": null
  }
}
\`\`\`
##
` as const;

export const searchRelevantSchemaSystemPrompt = `You are about to read the schema definition provided by the user, and then generate the query/mutation in proper format. If you can't find relevant query/mutation, just say I couldn't find it and the reason might be schema <fieldName> is too big. If you found, JUST response with query/mutation using variables in graphql block, use fragment as much as possible, and separated variables in json block. MAKE SURE all fields are included. Below is some examples:
${searchRelevantSchemaPrompt}
FOLLOW how to response in above example and follow the instruction.`;
