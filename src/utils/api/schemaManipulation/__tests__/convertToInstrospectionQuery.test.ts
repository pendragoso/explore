import { printSchema } from 'graphql';
import { describe, expect, test } from 'vitest';

import { convertToInstrospectionQuery } from 'src/utils/api/schemaManipulation/convertToInstrospectionQuery';
import { extractAndConvertSchema } from 'src/utils/api/schemaManipulation/extractAndConvertSchema';

describe('Make sure mutation only graphqls converted to introspection query correctly', () => {
  test('Simple mutation graphqls', () => {
    const graphqlsContent = `    
    type Query {
      _placeholder: String
    }
    type Mutation {
    login(input: UserLoginInput): CredentialSession
    }
    type CredentialSession {
    id: ID!
    createdAt: DateTime!
    validUntil: DateTime
    credential: ID!
    organization: ID!
    serviceToken: String
    user: ID
    store: Int
    """ list of permission name"""
    permissions: [String!]
    mode: Mode!
    }
    """An RFC-3339 compliant DateTime Scalar"""
    scalar DateTime
    enum Mode {
    LIVE
    TEST
    }
    """ input schemas"""
    input UserLoginInput {
    email: String!
    password: String!
    mode: Mode!
    organizationId: ID
    }
    `;
    expect(convertToInstrospectionQuery({ graphqlsContent })).toMatchSnapshot();
  });

  test('Make sure the mutation only introspection is converable to schema types definition', () => {
    const graphqlsContent = `    
    type Query {
      _placeholder: String
    }
    type Mutation {
    login(input: UserLoginInput): CredentialSession
    }
    type CredentialSession {
    id: ID!
    createdAt: DateTime!
    validUntil: DateTime
    credential: ID!
    organization: ID!
    serviceToken: String
    user: ID
    store: Int
    """ list of permission name"""
    permissions: [String!]
    mode: Mode!
    }
    """An RFC-3339 compliant DateTime Scalar"""
    scalar DateTime
    enum Mode {
    LIVE
    TEST
    }
    """ input schemas"""
    input UserLoginInput {
    email: String!
    password: String!
    mode: Mode!
    organizationId: ID
    }
    `;
    const introspectionQuery = convertToInstrospectionQuery({
      graphqlsContent,
    });
    if (!introspectionQuery) {
      throw new Error('Invalid introspection query value');
    }

    const chunkedSchema = extractAndConvertSchema({
      schema: introspectionQuery,
    });

    // Make sure the introspection is extractable
    expect(chunkedSchema).toMatchInlineSnapshot(`
      {
        "chunkedMutationSchema": [
          GraphQLSchema {
            "__validationErrors": undefined,
            "_directives": [
              "@include",
              "@skip",
              "@deprecated",
              "@specifiedBy",
            ],
            "_implementationsMap": {},
            "_mutationType": "Mutation",
            "_queryType": undefined,
            "_subTypeMap": {},
            "_subscriptionType": undefined,
            "_typeMap": {
              "Boolean": "Boolean",
              "CredentialSession": "CredentialSession",
              "DateTime": "DateTime",
              "ID": "ID",
              "Int": "Int",
              "Mode": "Mode",
              "Mutation": "Mutation",
              "String": "String",
              "UserLoginInput": "UserLoginInput",
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
        ],
        "chunkedQuerySchema": [],
      }
    `);

    // Make sure the schema is convertable back to graphqls
    expect(
      chunkedSchema.chunkedMutationSchema.map(schema => printSchema(schema))
    ).toMatchInlineSnapshot(`
      [
        "type Mutation {
        login(input: UserLoginInput): CredentialSession
      }

      type CredentialSession {
        id: ID!
        createdAt: DateTime!
        validUntil: DateTime
        credential: ID!
        organization: ID!
        serviceToken: String
        user: ID
        store: Int

        \\"\\"\\" list of permission name\\"\\"\\"
        permissions: [String!]
        mode: Mode!
      }

      \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
      scalar DateTime

      enum Mode {
        LIVE
        TEST
      }

      \\"\\"\\" input schemas\\"\\"\\"
      input UserLoginInput {
        email: String!
        password: String!
        mode: Mode!
        organizationId: ID
      }",
      ]
    `);
    expect(
      chunkedSchema.chunkedQuerySchema.map(schema => printSchema(schema))
    ).toMatchInlineSnapshot('[]');
  });
});

describe('Make sure query only graphqls converted to introspection query correctly', () => {
  test('Simple query graphqls', () => {
    const graphqlsContent = `    
    type Query {
    user(email: String): User
    }
    """ schemas"""
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
    """An RFC-3339 compliant DateTime Scalar"""
    scalar DateTime
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
    `;
    expect(convertToInstrospectionQuery({ graphqlsContent })).toMatchSnapshot();
  });

  test('Make sure the query only introspection is convertable to schema types definition', () => {
    const graphqlsContent = `    
    type Query {
    user(email: String): User
    }
    """ schemas"""
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
    """An RFC-3339 compliant DateTime Scalar"""
    scalar DateTime
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
    `;
    const introspectionQuery = convertToInstrospectionQuery({
      graphqlsContent,
    });
    if (!introspectionQuery) {
      throw new Error('Invalid introspection query value');
    }

    const chunkedSchema = extractAndConvertSchema({
      schema: introspectionQuery,
    });
    // Make sure the query is extractable
    expect(chunkedSchema).toMatchInlineSnapshot(`
      {
        "chunkedMutationSchema": [],
        "chunkedQuerySchema": [
          GraphQLSchema {
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
              "Boolean": "Boolean",
              "DateTime": "DateTime",
              "ID": "ID",
              "MultiFactorAuthenticationMode": "MultiFactorAuthenticationMode",
              "Query": "Query",
              "String": "String",
              "User": "User",
              "UserStatus": "UserStatus",
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
        ],
      }
    `);

    // Make sure the query only introspection is convertable back to schema types definition
    expect(chunkedSchema.chunkedQuerySchema.map(schema => printSchema(schema)))
      .toMatchInlineSnapshot(`
      [
        "type Query {
        user(email: String): User
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

      \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
      scalar DateTime

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
      }",
      ]
    `);
  });
});
