import { describe, expect, test } from 'vitest';

import { extractValidationCompletionResult } from 'src/utils/api/schemaValidate/extractValidationCompletionResult';

describe('extractValidationCompletionResult', () => {
  test('Result with no styleguide validation keywords', () => {
    const text = `Title: User Management Schema
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
        - updatedBy: ID! - User ID who last updated the user.`;
    expect(extractValidationCompletionResult(text)).toMatchInlineSnapshot(
      'null'
    );
  });

  test('Result has styleguide validation keywords (`Abides styleguide` and `Rule violated`)', () => {
    const text = `Title: User Management Schema
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
- Rule 2: The \`id\` field is exposing implementation details. It's described as an MD5-encrypted string that is auto-generated every 5 minutes. This is an implementation detail that should not be exposed in the API design.`;
    expect(extractValidationCompletionResult(text)).toMatchInlineSnapshot(`
      {
        "isAbideStyleGuide": "No",
        "ruleViolated": "- Rule 2: The \`id\` field is exposing implementation details. It's described as an MD5-encrypted string that is auto-generated every 5 minutes. This is an implementation detail that should not be exposed in the API design.",
      }
    `);
  });
});
