import { schemaRules } from 'src/utils/api/schemaManipulation/prompts/schemaChunkValidationPrompt';

export const schemaSystemBasePrompt =
  `You are an expert in GraphQL api design, and you can validate the schema definition user's gonna give based on this provided GraphQL rules:\n${schemaRules}` as const;
export const schemaImportBasePrompt =
  `Your task is to verify if the SCHEMA DEFINITION below abides the given rules` as const;
export const schemaChunkGenerationPrompt = ({
  schemaContent,
}: {
  schemaContent: string;
}) =>
  `Your task is to verify if the SCHEMA DEFINITION below abides the given rules, here is some examples:
Ex 1:
${schemaImportBasePrompt}
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
"""Credential of a user with ID is a token that can be used to authenticate a user, encrypted with md5 with token key, the encrypt token will auto generated every 5 minutes."""
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
"""An RFC-3339 compliant DateTime Scalar"""
scalar DateTime
enum Mode {
LIVE
TEST
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
${schemaImportBasePrompt}
SCHEMA DEFINITION
type Query {
"""Query an LcgBillingRecord by ID"""
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
${schemaImportBasePrompt}
SCHEMA DEFINITION
type Mutation {
"""Create new Orders"""
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
- Rule 16: The "createOrders" mutation is not following the naming convention. It is interacting with "Order" object and creating multiple orders, it should be "ordersCreate" instead.
##
NOW, FOLLOW HOW TO RESPONSE IN THE EXAMPLES ABOVE, AND VERIFY IF THE SCHEMA DEFINITION BELOW ABIDES EACH RULE IN THE GIVEN RULES!
${schemaImportBasePrompt}
SCHEMA DEFINITION
${schemaContent}
VERIFY IF THE SCHEMA DEFINITION ABOVE ABIDES THE GIVEN RULES!
` as const;
