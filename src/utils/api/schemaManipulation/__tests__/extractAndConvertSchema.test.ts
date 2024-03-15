import { readFileSync } from 'fs';
import type { IntrospectionQuery } from 'graphql';
import { beforeAll, describe, expect, test } from 'vitest';

import { jsonParse } from 'src/utils/jsonParse';

import { convertToSchemaType } from '../convertToSchemaType';
import { extractAndConvertSchema } from '../extractAndConvertSchema';

const dataSetPath = `${process.cwd()}/src/utils/api/schemaManipulation/__tests__/__datasets__/graphql.auth.schema.json`;

describe('extractAndConvertSchema query type', () => {
  let chunksResult: ReturnType<typeof extractAndConvertSchema> | null = null;
  beforeAll(() => {
    const schemaContent = readFileSync(dataSetPath, 'utf-8');
    const parsedSchema = jsonParse<IntrospectionQuery>(schemaContent);

    chunksResult =
      parsedSchema &&
      extractAndConvertSchema({
        schema: parsedSchema,
      });
  });
  test('should return query schema types', () => {
    if (chunksResult) {
      const { chunkedQuerySchema } = chunksResult;
      expect(chunkedQuerySchema.map(schema => convertToSchemaType(schema)))
        .toMatchInlineSnapshot(`
        [
          "type Query {
        credential(id: ID!): Credential
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
        }",
          "type Query {
        credentials(after: String, filter: CredentialFilter, first: Int = 10): CredentialConnection
        }
        type CredentialConnection {
        edges: [CredentialEdge]
        pageInfo: PageInfo
        }
        type CredentialEdge {
        cursor: String
        node: Credential
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
        type PageInfo {
        endCursor: String
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        }
        input CredentialFilter {
        expiredAtAfter: DateTime
        expiredAtBefore: DateTime
        type: CredentialType
        user: ID
        }",
          "type Query {
        getCredentialServiceToken(input: CredentialServiceTokenQueryInput): CredentialServiceToken
        }
        \\"\\"\\" schemas\\"\\"\\"
        type CredentialServiceToken {
        credential: Credential
        id: ID
        mode: Mode
        organization: String
        serviceToken: String
        storeId: Int
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
        input CredentialServiceTokenQueryInput {
        mode: Mode!
        storeId: Int!
        }",
          "type Query {
        permissions(after: String, first: Int = 10): PermissionConnection
        }
        type PermissionConnection {
        edges: [PermissionEdge]
        pageInfo: PageInfo
        }
        type PermissionEdge {
        cursor: String
        node: Permission
        }
        type Permission {
        createdAt: DateTime!
        description: String!
        id: ID!
        name: String!
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        type PageInfo {
        endCursor: String
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        }",
          "type Query {
        roles(after: String, filter: RoleFilter, first: Int = 10): RoleConnection
        }
        type RoleConnection {
        edges: [RoleEdge]
        pageInfo: PageInfo
        }
        type RoleEdge {
        cursor: String
        node: Role
        }
        type Role {
        createdAt: DateTime!
        createdBy: ID!
        description: String
        id: ID!
        name: String!
        organization: ID
        permissions: [String!]!
        \\"\\"\\" a unique name for your role. no space \\"\\"\\"
        slug: String!
        type: RoleType!
        updatedAt: DateTime!
        updatedBy: ID!
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum RoleType {
        CUSTOM
        INTERNAL
        ORGANIZATIONAL
        PUBLIC
        SUBSCRIPTION
        }
        type PageInfo {
        endCursor: String
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        }
        input RoleFilter {
        name: String
        slug: String
        type: RoleType
        }",
          "type Query {
        rolesGlobal(after: String, filter: RoleFilter, first: Int = 10): RoleConnection
        }
        type RoleConnection {
        edges: [RoleEdge]
        pageInfo: PageInfo
        }
        type RoleEdge {
        cursor: String
        node: Role
        }
        type Role {
        createdAt: DateTime!
        createdBy: ID!
        description: String
        id: ID!
        name: String!
        organization: ID
        permissions: [String!]!
        \\"\\"\\" a unique name for your role. no space \\"\\"\\"
        slug: String!
        type: RoleType!
        updatedAt: DateTime!
        updatedBy: ID!
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum RoleType {
        CUSTOM
        INTERNAL
        ORGANIZATIONAL
        PUBLIC
        SUBSCRIPTION
        }
        type PageInfo {
        endCursor: String
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        }
        input RoleFilter {
        name: String
        slug: String
        type: RoleType
        }",
          "type Query {
        user(email: String): User
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
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
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
        }",
          "type Query {
        users(after: String, filter: UserFilter, first: Int = 10): UserConnection
        }
        type UserConnection {
        edges: [UserEdge]
        pageInfo: PageInfo
        }
        type UserEdge {
        cursor: String
        node: User
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
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
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
        type PageInfo {
        endCursor: String
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String
        }
        input UserFilter {
        email: String
        status: UserStatus
        userId: ID
        }",
        ]
      `);
    }
  });

  test('should return mutation schema types', () => {
    if (chunksResult) {
      const { chunkedMutationSchema } = chunksResult;
      expect(chunkedMutationSchema.map(schema => convertToSchemaType(schema)))
        .toMatchInlineSnapshot(`
        [
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
        }",
          "type Mutation {
        \\"\\"\\"
        When a subscription is created/turned on, we will assign all the given roles via this operation call, for all the respective organizations admin users as assignable roles
        \\"\\"\\"
        credentialAddSubscriptionRoles(organizationIds: [ID!]!, roles: [ID!]!): Result
        }
        enum Result {
        FAILURE
        SUCCESS
        }",
          "type Mutation {
        \\"\\"\\"
        When a subscription is no longer valid, we will remove all the given roles via this operation call, for all the respective organizations credentials
        \\"\\"\\"
        credentialRemoveSubscriptionRoles(organizationIds: [ID!]!, roles: [ID!]!): Result
        }
        enum Result {
        FAILURE
        SUCCESS
        }",
          "type Mutation {
        \\"\\"\\"
        Create a link between one or more api token credentials and the organization service token.
        \\"\\"\\"
        credentialServiceTokenCreate(input: CredentialServiceTokenCreateInput!): [CredentialServiceToken!]!
        }
        \\"\\"\\" schemas\\"\\"\\"
        type CredentialServiceToken {
        credential: Credential
        id: ID
        mode: Mode
        organization: String
        serviceToken: String
        storeId: Int
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
        input CredentialServiceTokenCreateInput {
        storeId: Int!
        }",
          "type Mutation {
        credentialUpdate(input: CredentialUpdateInput!): Credential!
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
        input CredentialUpdateInput {
        assignableRoles: [String]
        expiredAt: DateTime
        id: ID!
        name: String
        roles: [String!]
        }",
          "type Mutation {
        deleteCredential(id: ID!): Result
        }
        enum Result {
        FAILURE
        SUCCESS
        }",
          "type Mutation {
        login(input: UserLoginInput): CredentialSession
        }
        type CredentialSession {
        createdAt: DateTime!
        credential: ID!
        id: ID!
        mode: Mode!
        organization: ID!
        \\"\\"\\" list of permission name\\"\\"\\"
        permissions: [String!]
        serviceToken: String
        store: Int
        user: ID
        validUntil: DateTime
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
        mode: Mode!
        organizationId: ID
        password: String!
        }",
          "type Mutation {
        loginLegacy(input: UserLoginLegacyInput): CredentialSession
        }
        type CredentialSession {
        createdAt: DateTime!
        credential: ID!
        id: ID!
        mode: Mode!
        organization: ID!
        \\"\\"\\" list of permission name\\"\\"\\"
        permissions: [String!]
        serviceToken: String
        store: Int
        user: ID
        validUntil: DateTime
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum Mode {
        LIVE
        TEST
        }
        input UserLoginLegacyInput {
        \\"\\"\\"@deprecated\\"\\"\\"
        email: String
        storeId: Int!
        userToken: String!
        }",
          "type Mutation {
        migrateCredentialServiceToken(input: MigrateCredentialServiceTokenInput): Result! @deprecated
        }
        enum Result {
        FAILURE
        SUCCESS
        }
        input MigrateCredentialServiceTokenInput {
        email: String
        organizationName: String!
        storeId: Int!
        }",
          "type Mutation {
        roleCreate(input: RoleCreateInput!): Role
        }
        type Role {
        createdAt: DateTime!
        createdBy: ID!
        description: String
        id: ID!
        name: String!
        organization: ID
        permissions: [String!]!
        \\"\\"\\" a unique name for your role. no space \\"\\"\\"
        slug: String!
        type: RoleType!
        updatedAt: DateTime!
        updatedBy: ID!
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum RoleType {
        CUSTOM
        INTERNAL
        ORGANIZATIONAL
        PUBLIC
        SUBSCRIPTION
        }
        input RoleCreateInput {
        description: String
        name: String!
        permissions: [String!]!
        slug: String!
        }",
          "type Mutation {
        roleDelete(id: String): Result
        }
        enum Result {
        FAILURE
        SUCCESS
        }",
          "type Mutation {
        roleGlobalCreate(input: RoleGlobalCreateInput): Role
        }
        type Role {
        createdAt: DateTime!
        createdBy: ID!
        description: String
        id: ID!
        name: String!
        organization: ID
        permissions: [String!]!
        \\"\\"\\" a unique name for your role. no space \\"\\"\\"
        slug: String!
        type: RoleType!
        updatedAt: DateTime!
        updatedBy: ID!
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum RoleType {
        CUSTOM
        INTERNAL
        ORGANIZATIONAL
        PUBLIC
        SUBSCRIPTION
        }
        input RoleGlobalCreateInput {
        description: String
        name: String!
        permissions: [String!]!
        slug: String!
        type: RoleType!
        }",
          "type Mutation {
        roleUpdate(input: RoleUpdateInput!): Role
        }
        type Role {
        createdAt: DateTime!
        createdBy: ID!
        description: String
        id: ID!
        name: String!
        organization: ID
        permissions: [String!]!
        \\"\\"\\" a unique name for your role. no space \\"\\"\\"
        slug: String!
        type: RoleType!
        updatedAt: DateTime!
        updatedBy: ID!
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum RoleType {
        CUSTOM
        INTERNAL
        ORGANIZATIONAL
        PUBLIC
        SUBSCRIPTION
        }
        input RoleUpdateInput {
        description: String
        id: ID!
        name: String!
        permissions: [String!]!
        }",
          "type Mutation {
        roleValidateSlug(input: String!): Boolean
        }",
          "type Mutation {
        updateCredentialSessionContext(updateCredentialSessionInput: UpdateCredentialSessionInput!): CredentialSession!
        }
        type CredentialSession {
        createdAt: DateTime!
        credential: ID!
        id: ID!
        mode: Mode!
        organization: ID!
        \\"\\"\\" list of permission name\\"\\"\\"
        permissions: [String!]
        serviceToken: String
        store: Int
        user: ID
        validUntil: DateTime
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum Mode {
        LIVE
        TEST
        }
        input UpdateCredentialSessionInput {
        organization: String
        }",
          "type Mutation {
        userCreate(input: UserCreateInput!): User!
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
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
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
        input UserCreateInput {
        email: String!
        multiFactorAuthentication: MultiFactorAuthenticationMode
        multiFactorAuthenticationPhone: String
        onBoarding: Boolean = false
        organizationIds: [ID!]!
        password: String!
        }",
          "type Mutation {
        \\"\\"\\" normal password reset.\\"\\"\\"
        userPasswordUpdate(currentPassword: String, email: String, newPassword: String): Result
        }
        enum Result {
        FAILURE
        SUCCESS
        }",
          "type Mutation {
        userUpdate(input: UserUpdateInput!): User!
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
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
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
        input UserUpdateInput {
        organizationIds: [ID!]!
        status: UserStatus!
        userId: ID!
        }",
          "type Mutation {
        validateCredential: CredentialSession
        }
        type CredentialSession {
        createdAt: DateTime!
        credential: ID!
        id: ID!
        mode: Mode!
        organization: ID!
        \\"\\"\\" list of permission name\\"\\"\\"
        permissions: [String!]
        serviceToken: String
        store: Int
        user: ID
        validUntil: DateTime
        }
        \\"\\"\\"An RFC-3339 compliant DateTime Scalar\\"\\"\\"
        scalar DateTime
        enum Mode {
        LIVE
        TEST
        }",
        ]
      `);
    }
  });
});
