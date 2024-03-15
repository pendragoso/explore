import { readFileSync } from 'fs';
import { type IntrospectionQuery, buildClientSchema } from 'graphql';
import { describe, expect, test } from 'vitest';

import { jsonParse } from 'src/utils/jsonParse';

import { convertToSchemaType } from '../convertToSchemaType';
import { extractTypes } from '../extractTypes';

const dataSetPath = `${process.cwd()}/src/utils/api/schemaManipulation/__tests__/__datasets__/graphql.auth.schema.json`;

describe('extractTypes query type', () => {
  test('should return a query type', () => {
    const schemaContent = readFileSync(dataSetPath, 'utf-8');
    const parsedSchema = jsonParse<IntrospectionQuery>(schemaContent);
    const mutationTypes =
      parsedSchema && buildClientSchema(parsedSchema).getMutationType();
    const mutationSchemas = mutationTypes
      ? extractTypes({
          isQuery: false,
          schemaType: mutationTypes,
        })
      : [];
    const firstMutation = mutationSchemas[0];

    if (firstMutation) {
      expect(convertToSchemaType(firstMutation)).toMatchInlineSnapshot(`
        "type Mutation {
        createCredential(createCredentialInput: CreateCredentialInput!): Credential!
        }
        \\"\\"\\" schemas\\"\\"\\"
        type Credential {
        assignableRoles: [ID]
        createdAt: DateTime!
        createdBy: ID!
        expiredAt: String
        id: ID!
        lastUsedAt: String
        mode: Mode!
        multiFactorAuthenticated: MultiFactorAuthenticated
        name: String
        organization: ID!
        roles: [ID!]
        type: CredentialType
        updatedAt: DateTime!
        updatedBy: ID!
        user: User
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum Mode {
        LIVE
        TEST
        }
        enum MultiFactorAuthenticated {
        IN_PROGRESS
        NOT_VERIFIED
        VERIFIED
        }
        enum CredentialType {
        API_TOKEN
        HELLO_TOKEN
        SERVICE_TOKEN
        USER_TOKEN
        }
        \\"\\"\\" schemas\\"\\"\\"
        type User {
        createdAt: DateTime!
        createdBy: ID!
        email: String!
        id: String!
        lastLoginAt: DateTime
        multiFactorAuthentication: MultiFactorAuthenticationMode
        multiFactorAuthenticationPhone: String
        organizations: [ID!]!
        status: UserStatus
        updatedAt: DateTime!
        updatedBy: ID!
        }
        enum MultiFactorAuthenticationMode {
        EMAIL
        EMAIL_NOT_VERIFIED
        NOT_VERIFIED
        SMS
        SMS_NOT_VERIFIED
        }
        enum UserStatus {
        ACTIVE
        DISABLED
        }
        \\"\\"\\" input schemas\\"\\"\\"
        input CreateCredentialInput {
        assignableRoles: [String]
        expiredAt: DateTime
        mode: Mode!
        name: String
        organization: String!
        roles: [String!]
        type: CredentialType!
        user: String
        }"
      `);
    }
  });
});

describe('extractTypes mutation type', () => {
  test('should return a query mutation type', () => {
    const schemaContent = readFileSync(dataSetPath, 'utf-8');
    const parsedSchema = jsonParse<IntrospectionQuery>(schemaContent);
    const queryTypes =
      parsedSchema && buildClientSchema(parsedSchema).getQueryType();
    const querySchemas = queryTypes
      ? extractTypes({
          isQuery: false,
          schemaType: queryTypes,
        })
      : [];
    const firstQuery = querySchemas[0];
    if (firstQuery) {
      expect(querySchemas).toMatchInlineSnapshot(`
        [
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
              "Credential": "Credential",
              "CredentialType": "CredentialType",
              "DateTime": "DateTime",
              "ID": "ID",
              "Mode": "Mode",
              "MultiFactorAuthenticated": "MultiFactorAuthenticated",
              "MultiFactorAuthenticationMode": "MultiFactorAuthenticationMode",
              "Mutation": "Mutation",
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
              "Credential": "Credential",
              "CredentialConnection": "CredentialConnection",
              "CredentialEdge": "CredentialEdge",
              "CredentialFilter": "CredentialFilter",
              "CredentialType": "CredentialType",
              "DateTime": "DateTime",
              "ID": "ID",
              "Int": "Int",
              "Mode": "Mode",
              "MultiFactorAuthenticated": "MultiFactorAuthenticated",
              "MultiFactorAuthenticationMode": "MultiFactorAuthenticationMode",
              "Mutation": "Mutation",
              "PageInfo": "PageInfo",
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
              "Credential": "Credential",
              "CredentialServiceToken": "CredentialServiceToken",
              "CredentialServiceTokenQueryInput": "CredentialServiceTokenQueryInput",
              "CredentialType": "CredentialType",
              "DateTime": "DateTime",
              "ID": "ID",
              "Int": "Int",
              "Mode": "Mode",
              "MultiFactorAuthenticated": "MultiFactorAuthenticated",
              "MultiFactorAuthenticationMode": "MultiFactorAuthenticationMode",
              "Mutation": "Mutation",
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
              "DateTime": "DateTime",
              "ID": "ID",
              "Int": "Int",
              "Mutation": "Mutation",
              "PageInfo": "PageInfo",
              "Permission": "Permission",
              "PermissionConnection": "PermissionConnection",
              "PermissionEdge": "PermissionEdge",
              "String": "String",
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
              "DateTime": "DateTime",
              "ID": "ID",
              "Int": "Int",
              "Mutation": "Mutation",
              "PageInfo": "PageInfo",
              "Role": "Role",
              "RoleConnection": "RoleConnection",
              "RoleEdge": "RoleEdge",
              "RoleFilter": "RoleFilter",
              "RoleType": "RoleType",
              "String": "String",
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
              "DateTime": "DateTime",
              "ID": "ID",
              "Int": "Int",
              "Mutation": "Mutation",
              "PageInfo": "PageInfo",
              "Role": "Role",
              "RoleConnection": "RoleConnection",
              "RoleEdge": "RoleEdge",
              "RoleFilter": "RoleFilter",
              "RoleType": "RoleType",
              "String": "String",
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
              "DateTime": "DateTime",
              "ID": "ID",
              "MultiFactorAuthenticationMode": "MultiFactorAuthenticationMode",
              "Mutation": "Mutation",
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
              "DateTime": "DateTime",
              "ID": "ID",
              "Int": "Int",
              "MultiFactorAuthenticationMode": "MultiFactorAuthenticationMode",
              "Mutation": "Mutation",
              "PageInfo": "PageInfo",
              "String": "String",
              "User": "User",
              "UserConnection": "UserConnection",
              "UserEdge": "UserEdge",
              "UserFilter": "UserFilter",
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
        ]
      `);
    }
  });
});
