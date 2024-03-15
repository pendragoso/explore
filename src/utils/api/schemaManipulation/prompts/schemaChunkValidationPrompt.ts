export const schemaRules = `1. Always start with a high-level view of the objects and their relationships before you deal with specific fields. These are the entities in our GraphQL schema.
2. Never expose implementation details in your API design.
3. Design your API around the business domain, not the implementation, user-interface, or legacy APIs.
4. Always carefully consider adding fields to an API in production. It’s easier to add fields than to remove them.
5. Group closely-related fields together into subobjects.
6. List-type fields are almost always non-null lists with non-null elements. If you want a nullable list make sure there is real semantic value in being able to distinguish between an empty list and a null one.
7. Like lists, boolean fields are almost always non-null. If you want a nullable boolean, make sure there is real semantic value in being able to distinguish between all three states (null/false/true) and that it doesn't indicate a bigger design flaw.
8. Always check whether list fields should be paginated or not.
9. Carefully weigh the performance impact of using object references instead of ID fields. While object references are ideal, they lead to the N+1 query problem.
10. Choose field names based on what makes sense, not based on the implementation or what the field is called in legacy APIs.
11. Use enums for fields which can only take a specific set of values.
12. The API should provide business logic, not just data. Complex calculations should be done on the server, in one place, not on the client, in many places. (e.g. consider landed cost subtotals)
13. Provide the raw data too, even when there’s business logic around it.
14. Write separate mutations for separate logical actions on a resource.
15. When writing separate mutations for relationships, consider whether it would be useful for the mutations to operate on multiple elements at once.
16. Prefix mutation names with the object they are mutating for alphabetical grouping (e.g. use orderCancel instead of cancelOrder).
17. Only make input fields required if they're actually semantically required for the mutation to proceed.
18. Structure mutation inputs to reduce duplication, even if this requires relaxing requiredness constraints on certain fields. *wordsmith this
19. Mutations should provide user/business-level errors via a userErrors field on the mutation payload. The top-level query errors entry is reserved for client and server-level errors.
`;

export const schemaValidateBasePrompt =
  `Above is a GraphQL styleguide. Check a schema api reference below to see if it abides the styleguide, only present violated rules and explain why.` as const;
export const schemaChunkValidationPrompt = `${schemaValidateBasePrompt}
Title: Credential management schema
Query details:
- credentials(first: Int = 10, after: String, filter: CredentialFilter): CredentialConnection
  - first: Int - Number of credentials to fetch, default is 10.
  - after: String - Cursor for pagination.
  - filter: CredentialFilter - Filter credentials based on certain criteria.
    - type: CredentialType - Filter by credential type (API_TOKEN, USER_TOKEN, HELLO_TOKEN, SERVICE_TOKEN).
    - user: ID - Filter by user ID.
    - expiredAtBefore: DateTime - Filter by credentials that expired before a specific date. An RFC-3339 compliant DateTime Scalar
    - expiredAtAfter: DateTime - Filter by credentials that expired after a specific date. An RFC-3339 compliant DateTime Scalar
  - CredentialConnection - Connection object for paginated credentials.
    - edges: [CredentialEdge] - List of credential edges.
      - cursor: String - Cursor for pagination.
      - node: Credential - Credential node.
        - id: ID! - Unique identifier for the credential.
        - createdAt: DateTime! - Date and time when the credential was created. An RFC-3339 compliant DateTime Scalar
        - createdBy: ID! - User ID who created the credential.
        - expiredAt: String - Expiration date of the credential.
        - lastUsedAt: String - Last used date of the credential.
        - mode: Mode! - Mode of the credential (LIVE or TEST).
        - name: String - Name of the credential.
        - organization: ID! - Organization ID associated with the credential.
        - user: User - User associated with the credential.
        - multiFactorAuthenticated: MultiFactorAuthenticated - Multi-factor authentication status (IN_PROGRESS, VERIFIED, NOT_VERIFIED).
        - roles: [ID!] - List of role IDs associated with the credential.
        - assignableRoles: [ID] - List of assignable role IDs.
        - type: CredentialType - Type of the credential (API_TOKEN, USER_TOKEN, HELLO_TOKEN, SERVICE_TOKEN).
        - updatedAt: DateTime! - Date and time when the credential was last updated. An RFC-3339 compliant DateTime Scalar
        - updatedBy: ID! - User ID who last updated the credential.
    - pageInfo: PageInfo - Pagination information.
      - hasPreviousPage: Boolean! - Indicates if there is a previous page.
      - hasNextPage: Boolean! - Indicates if there is a next page.
      - startCursor: String - Start cursor for pagination.
      - endCursor: String - End cursor for pagination.
Abides styleguide: Yes
Rule violated: None
##
${schemaValidateBasePrompt}
Title: User Management Schema
Query details:
- user(email: String): User
  - email: String - Email address of the user to fetch.
  - User
    - id: String! - Unique identifier for the user, using 20 randoms string encrypted with md5 with token key, the encrypt token will auto generated every 5 minutes.
    - createdAt: DateTime! - Date and time when the user was created. An RFC-3339 compliant DateTime Scalar
    - createdBy: ID! - User ID who created the user.
    - email: String! - Email address of the user.
    - lastLoginAt: DateTime - Date and time when the user last logged in. An RFC-3339 compliant DateTime Scalar
    - multiFactorAuthentication: MultiFactorAuthenticationMode - Multi-factor authentication mode for the user (SMS, SMS_NOT_VERIFIED, EMAIL, EMAIL_NOT_VERIFIED, NOT_VERIFIED).
    - multiFactorAuthenticationPhone: String - Phone number used for multi-factor authentication.
    - organizations: [ID!]! - List of organization IDs associated with the user.
    - status: UserStatus - Status of the user (ACTIVE, DISABLED).
    - updatedAt: DateTime! - Date and time when the user was last updated. An RFC-3339 compliant DateTime Scalar. An RFC-3339 compliant DateTime Scalar
    - updatedBy: ID! - User ID who last updated the user.
Abides styleguide: No
Rule violated:
- Rule 2: The \`id\` field in type \`User\` is exposing implementation details. It's described as an MD5-encrypted string that is auto-generated every 5 minutes. This is an implementation detail that should not be exposed in the API design.
##
` as const;
