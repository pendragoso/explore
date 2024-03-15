import { buildSchema } from 'graphql';
import { describe, expect, test } from 'vitest';

import { prepareChunkSchemaRequest } from 'src/utils/api/schemaImport/prepareChunkSchemaRequest';

describe('prepareChunkSchemaRequest', () => {
  test('should return schemaWithRequiredFields and schemaWithOptionalFields', () => {
    const schemaContent = `
      type Query {
        user: User!
      }
      type User {
        id: ID!
        name: String!
        address: Address
      }
      type Address {
        id: ID!
        line1: String!
        line2: String
        city: String!
        state: String!
        zip: String!
      }
    `;

    const graphqlSchemas = buildSchema(schemaContent);

    const result = prepareChunkSchemaRequest({
      graphqlSchemas: [graphqlSchemas],
      schemaType: 'query',
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "extractedOptionalFieldsSchemas": [
          {
            "chunkType": "optionalFieldOnly",
            "extractedChunkSchema": GraphQLSchema {
              "__validationErrors": undefined,
              "_directives": [
                "@include",
                "@skip",
                "@deprecated",
                "@specifiedBy",
              ],
              "_implementationsMap": {},
              "_mutationType": undefined,
              "_queryType": "Query",
              "_subTypeMap": {},
              "_subscriptionType": undefined,
              "_typeMap": {
                "Address": "Address",
                "Boolean": "Boolean",
                "Query": "Query",
                "String": "String",
                "User": "User",
                "__Directive": "__Directive",
                "__DirectiveLocation": "__DirectiveLocation",
                "__EnumValue": "__EnumValue",
                "__Field": "__Field",
                "__InputValue": "__InputValue",
                "__Schema": "__Schema",
                "__Type": "__Type",
                "__TypeKind": "__TypeKind",
              },
              "astNode": undefined,
              "description": undefined,
              "extensionASTNodes": [],
              "extensions": {},
            },
            "fieldName": "user",
          },
        ],
        "extractedRequiredFieldsSchemas": [
          {
            "chunkType": "requiredFieldOnly",
            "extractedChunkSchema": GraphQLSchema {
              "__validationErrors": undefined,
              "_directives": [
                "@include",
                "@skip",
                "@deprecated",
                "@specifiedBy",
              ],
              "_implementationsMap": {},
              "_mutationType": undefined,
              "_queryType": "Query",
              "_subTypeMap": {},
              "_subscriptionType": undefined,
              "_typeMap": {
                "Address": "Address",
                "Boolean": "Boolean",
                "ID": "ID",
                "Query": "Query",
                "String": "String",
                "User": "User",
                "__Directive": "__Directive",
                "__DirectiveLocation": "__DirectiveLocation",
                "__EnumValue": "__EnumValue",
                "__Field": "__Field",
                "__InputValue": "__InputValue",
                "__Schema": "__Schema",
                "__Type": "__Type",
                "__TypeKind": "__TypeKind",
              },
              "astNode": undefined,
              "description": undefined,
              "extensionASTNodes": [],
              "extensions": {},
            },
            "fieldName": "user",
          },
        ],
        "requestsWithOptionalFields": [
          {
            "embeddings": "NONE",
            "meta": {
              "chunkFieldName": "user",
              "chunkType": "optionalFieldOnly",
            },
            "parameters": {
              "frequency_penalty": 0,
              "model": "gpt-4",
              "presence_penalty": 0,
              "stop": [
                "##",
              ],
              "temperature": 0,
              "top_p": 0,
            },
            "question": "Your task is to verify if the SCHEMA DEFINITION below abides the given rules, here is some examples:
      Ex 1:
      Your task is to verify if the SCHEMA DEFINITION below abides the given rules
      SCHEMA DEFINITION
      type Query {
      credentials(first: Int = 10, after: String, filter: CredentialFilter): CredentialConnection
      }
      type CredentialConnection {
      edges: [CredentialEdge]
      pageInfo: PageInfo
      }
      type CredentialEdge {
      cursor: String
      node: Credential
      }
      \\"\\"\\"Credential of a user with ID is a token that can be used to authenticate a user, encrypted with md5 with token key, the encrypt token will auto generated every 5 minutes.\\"\\"\\"
      type Credential {
      id: ID!
      createdAt: DateTime!
      createdBy: ID!
      expiredAt: String
      lastUsedAt: String
      mode: Mode!
      name: String
      organization: ID!
      user: User
      multiFactorAuthenticated: MultiFactorAuthenticated
      roles: [ID!]
      assignableRoles: [ID]
      type: CredentialType
      updatedAt: DateTime!
      updatedBy: ID!
      }
      \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
      scalar DateTime
      enum Mode {
      LIVE
      TEST
      }
      \\"\\"\\" schemas\\"\\"\\"
      type User {
      id: String!
      createdAt: DateTime!
      createdBy: ID!
      email: String!
      lastLoginAt: DateTime
      multiFactorAuthentication: MultiFactorAuthenticationMode
      multiFactorAuthenticationPhone: String
      organizations: [ID!]!
      status: UserStatus
      updatedAt: DateTime!
      updatedBy: ID!
      }
      enum MultiFactorAuthenticationMode {
      SMS
      SMS_NOT_VERIFIED
      EMAIL
      EMAIL_NOT_VERIFIED
      NOT_VERIFIED
      }
      enum UserStatus {
      ACTIVE
      DISABLED
      }
      enum MultiFactorAuthenticated {
      IN_PROGRESS
      VERIFIED
      NOT_VERIFIED
      }
      enum CredentialType {
      API_TOKEN
      USER_TOKEN
      HELLO_TOKEN
      SERVICE_TOKEN
      }
      type PageInfo {
      hasPreviousPage: Boolean!
      hasNextPage: Boolean!
      startCursor: String
      endCursor: String
      }
      input CredentialFilter {
      type: CredentialType
      user: ID
      expiredAtBefore: DateTime
      expiredAtAfter: DateTime
      }
      VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
      Assistant:
      Abides styleguide: Yes
      Rule violated: None
      ##
      Ex 2:
      Your task is to verify if the SCHEMA DEFINITION below abides the given rules
      SCHEMA DEFINITION
      type Query {
      \\"\\"\\"Query an LcgBillingRecord by ID\\"\\"\\"
      lcgBillingRecord(id: ID!): LcgBillingRecord
      }
      type LcgBillingRecord {
      billingUsageRecords: [BillingUsageRecord!]!
      shippingUsageRecords: [BillingUsageRecord!]!
      createdAt: DateTime!
      landedCostTotal: Decimal!
      orderId: ID
      shipmentId: ID
      status: BillingStatusCode!
      trackingNumber: String
      vendorOrderId: String
      }
      type BillingUsageRecord {
      createdAt: DateTime!
      status: BillingStatusCode!
      stripeConfirmationId: ID
      unitPrice: Decimal
      usageType: UsageRecordTypeCode!
      currency: CurrencyCode
      }
      enum CurrencyCode {
        __ISO_CURRENCY_CODE__
      }
      scalar DateTime
      enum BillingStatusCode {
      FAILED
      PENDING
      PROCESSED
      }
      scalar Decimal
      enum UsageRecordTypeCode {
      API_USAGE
      LCG_INVOICING
      }
      NOW YOU WILL VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
      Abides styleguide: No
      Rule violated:
      - Rule 2: The \`Credential\` type is exposing implementation details of the \`id\` field. It's described as an MD5-encrypted string that is auto-generated every 5 minutes. This is an implementation detail that should not be exposed in the API design.
      ##
      Ex 3:
      Your task is to verify if the SCHEMA DEFINITION below abides the given rules
      SCHEMA DEFINITION
      type Mutation {
      \\"\\"\\"Create new Orders\\"\\"\\"
      createOrders(input: [CreateOrderInput!]): [NewOrder]
      }
      input CreateOrderInput {
      id: ID!
      }
      type NewOrder {
      id: ID!
      }
      VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
      Assistant:
      Abides styleguide: No
      Rule violated:
      - Rule 16: The \\"createOrders\\" mutation is not following the naming convention. It is interacting with \\"Order\\" object and creating multiple orders, it should be \\"ordersCreate\\" instead.
      ##
      NOW, FOLLOW HOW TO RESPONSE IN THE EXAMPLES ABOVE, AND VERIFY IF THE SCHEMA DEFINITION BELOW ABIDES EACH RULE IN THE GIVEN RULES!
      Your task is to verify if the SCHEMA DEFINITION below abides the given rules
      SCHEMA DEFINITION
      type Query {
      user: User!
      }
      type User {
      address: Address
      }
      type Address {
      line2: String
      }
      VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
      ",
            "systemPromptOverride": "You are an expert in GraphQL api design, and you can validate the schema definition user's gonna give based on this provided GraphQL rules:
      1. Always start with a high-level view of the objects and their relationships before you deal with specific fields. These are the entities in our GraphQL schema.
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
      ",
          },
        ],
        "requestsWithRequiredFields": [
          {
            "embeddings": "NONE",
            "meta": {
              "chunkFieldName": "user",
              "chunkType": "requiredFieldOnly",
            },
            "parameters": {
              "frequency_penalty": 0,
              "model": "gpt-4",
              "presence_penalty": 0,
              "stop": [
                "##",
              ],
              "temperature": 0,
              "top_p": 0,
            },
            "question": "Your task is to verify if the SCHEMA DEFINITION below abides the given rules, here is some examples:
      Ex 1:
      Your task is to verify if the SCHEMA DEFINITION below abides the given rules
      SCHEMA DEFINITION
      type Query {
      credentials(first: Int = 10, after: String, filter: CredentialFilter): CredentialConnection
      }
      type CredentialConnection {
      edges: [CredentialEdge]
      pageInfo: PageInfo
      }
      type CredentialEdge {
      cursor: String
      node: Credential
      }
      \\"\\"\\"Credential of a user with ID is a token that can be used to authenticate a user, encrypted with md5 with token key, the encrypt token will auto generated every 5 minutes.\\"\\"\\"
      type Credential {
      id: ID!
      createdAt: DateTime!
      createdBy: ID!
      expiredAt: String
      lastUsedAt: String
      mode: Mode!
      name: String
      organization: ID!
      user: User
      multiFactorAuthenticated: MultiFactorAuthenticated
      roles: [ID!]
      assignableRoles: [ID]
      type: CredentialType
      updatedAt: DateTime!
      updatedBy: ID!
      }
      \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
      scalar DateTime
      enum Mode {
      LIVE
      TEST
      }
      \\"\\"\\" schemas\\"\\"\\"
      type User {
      id: String!
      createdAt: DateTime!
      createdBy: ID!
      email: String!
      lastLoginAt: DateTime
      multiFactorAuthentication: MultiFactorAuthenticationMode
      multiFactorAuthenticationPhone: String
      organizations: [ID!]!
      status: UserStatus
      updatedAt: DateTime!
      updatedBy: ID!
      }
      enum MultiFactorAuthenticationMode {
      SMS
      SMS_NOT_VERIFIED
      EMAIL
      EMAIL_NOT_VERIFIED
      NOT_VERIFIED
      }
      enum UserStatus {
      ACTIVE
      DISABLED
      }
      enum MultiFactorAuthenticated {
      IN_PROGRESS
      VERIFIED
      NOT_VERIFIED
      }
      enum CredentialType {
      API_TOKEN
      USER_TOKEN
      HELLO_TOKEN
      SERVICE_TOKEN
      }
      type PageInfo {
      hasPreviousPage: Boolean!
      hasNextPage: Boolean!
      startCursor: String
      endCursor: String
      }
      input CredentialFilter {
      type: CredentialType
      user: ID
      expiredAtBefore: DateTime
      expiredAtAfter: DateTime
      }
      VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
      Assistant:
      Abides styleguide: Yes
      Rule violated: None
      ##
      Ex 2:
      Your task is to verify if the SCHEMA DEFINITION below abides the given rules
      SCHEMA DEFINITION
      type Query {
      \\"\\"\\"Query an LcgBillingRecord by ID\\"\\"\\"
      lcgBillingRecord(id: ID!): LcgBillingRecord
      }
      type LcgBillingRecord {
      billingUsageRecords: [BillingUsageRecord!]!
      shippingUsageRecords: [BillingUsageRecord!]!
      createdAt: DateTime!
      landedCostTotal: Decimal!
      orderId: ID
      shipmentId: ID
      status: BillingStatusCode!
      trackingNumber: String
      vendorOrderId: String
      }
      type BillingUsageRecord {
      createdAt: DateTime!
      status: BillingStatusCode!
      stripeConfirmationId: ID
      unitPrice: Decimal
      usageType: UsageRecordTypeCode!
      currency: CurrencyCode
      }
      enum CurrencyCode {
        __ISO_CURRENCY_CODE__
      }
      scalar DateTime
      enum BillingStatusCode {
      FAILED
      PENDING
      PROCESSED
      }
      scalar Decimal
      enum UsageRecordTypeCode {
      API_USAGE
      LCG_INVOICING
      }
      NOW YOU WILL VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
      Abides styleguide: No
      Rule violated:
      - Rule 2: The \`Credential\` type is exposing implementation details of the \`id\` field. It's described as an MD5-encrypted string that is auto-generated every 5 minutes. This is an implementation detail that should not be exposed in the API design.
      ##
      Ex 3:
      Your task is to verify if the SCHEMA DEFINITION below abides the given rules
      SCHEMA DEFINITION
      type Mutation {
      \\"\\"\\"Create new Orders\\"\\"\\"
      createOrders(input: [CreateOrderInput!]): [NewOrder]
      }
      input CreateOrderInput {
      id: ID!
      }
      type NewOrder {
      id: ID!
      }
      VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
      Assistant:
      Abides styleguide: No
      Rule violated:
      - Rule 16: The \\"createOrders\\" mutation is not following the naming convention. It is interacting with \\"Order\\" object and creating multiple orders, it should be \\"ordersCreate\\" instead.
      ##
      NOW, FOLLOW HOW TO RESPONSE IN THE EXAMPLES ABOVE, AND VERIFY IF THE SCHEMA DEFINITION BELOW ABIDES EACH RULE IN THE GIVEN RULES!
      Your task is to verify if the SCHEMA DEFINITION below abides the given rules
      SCHEMA DEFINITION
      type Query {
      user: User!
      }
      type User {
      id: ID!
      name: String!
      address: Address
      }
      type Address {
      id: ID!
      line1: String!
      city: String!
      state: String!
      zip: String!
      }
      VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
      ",
            "systemPromptOverride": "You are an expert in GraphQL api design, and you can validate the schema definition user's gonna give based on this provided GraphQL rules:
      1. Always start with a high-level view of the objects and their relationships before you deal with specific fields. These are the entities in our GraphQL schema.
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
      ",
          },
        ],
      }
    `);
  });
});
