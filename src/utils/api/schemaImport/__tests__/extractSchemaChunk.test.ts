import { readFileSync } from 'fs';
import { buildSchema, printSchema } from 'graphql';
import { cwd } from 'process';
import { beforeAll, describe, expect, test } from 'vitest';

import { extractSchemaChunk } from 'src/utils/api/schemaImport/extractSchemaChunk';

describe('extractSchemaCHunk small query', () => {
  test('should return new schema with required fields only', () => {
    const schemaContent = `
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
    const graphqlSchemas = buildSchema(schemaContent);
    const result = extractSchemaChunk({
      graphqlSchema: graphqlSchemas,
      schemaType: 'query',
      type: 'requiredFieldOnly',
    });

    expect(printSchema(result)).toMatchInlineSnapshot(`
      "type Query {
        user: User
      }

      type User {
        id: String!
        createdAt: DateTime!
        createdBy: ID!
        email: String!
        lastLoginAt: DateTime
        multiFactorAuthentication: MultiFactorAuthenticationMode
        organizations: [ID!]!
        status: UserStatus
        updatedAt: DateTime!
        updatedBy: ID!
      }

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
      }"
    `);
  });

  test('should return new schema with optional fields only', () => {
    const schemaContent = `
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
    const graphqlSchemas = buildSchema(schemaContent);
    const result = extractSchemaChunk({
      graphqlSchema: graphqlSchemas,
      schemaType: 'query',
      type: 'optionalFieldOnly',
    });

    expect(printSchema(result)).toMatchInlineSnapshot(`
      "type Query {
        user(email: String): User
      }

      type User {
        createdAt: DateTime!
        lastLoginAt: DateTime
        multiFactorAuthentication: MultiFactorAuthenticationMode
        multiFactorAuthenticationPhone: String
        status: UserStatus
        updatedAt: DateTime!
      }

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
      }"
    `);
  });
});

describe('extractSchemaCHunk big query (root internal)', () => {
  let schemaContent = '';
  beforeAll(() => {
    schemaContent = readFileSync(
      `${cwd()}/src/utils/api/schemaImport/__tests__/__mocks__/internal_root.graphqls`,
      'utf-8'
    );
  });
  test('should return new schema with required fields only', () => {
    const graphqlSchemas = buildSchema(schemaContent);
    const result = extractSchemaChunk({
      graphqlSchema: graphqlSchemas,
      schemaType: 'query',
      type: 'requiredFieldOnly',
    });

    expect(printSchema(result)).toMatchSnapshot();
  });

  test('should return new schema with optional fields only', () => {
    const graphqlSchemas = buildSchema(schemaContent);
    const result = extractSchemaChunk({
      graphqlSchema: graphqlSchemas,
      schemaType: 'query',
      type: 'optionalFieldOnly',
    });

    expect(printSchema(result)).toMatchSnapshot();
  });
});
