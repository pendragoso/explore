import { gql } from 'graphql-request';

export const LoginLegacy = gql`
  mutation loginLegacy($input: UserLoginLegacyInput) {
    loginLegacy(input: $input) {
      credential
    }
  }
`;
