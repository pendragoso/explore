import { gql } from 'graphql-request';

export const getGraphHubDeployedSchemaById = gql`
  query getGraphHubDeployedSchemaById($id: bigint!) {
    graphHub_deployedSchema(where: { id: { _eq: $id } }) {
      createdAt
      schemaDefinition
      label
      id
      updatedAt
    }
  }
`;

export const getGraphHubDraftSchemaById = gql`
  query getGraphHubDraftSchemaById($id: bigint!) {
    graphHub_draftSchema(where: { id: { _eq: $id } }) {
      createdAt
      schemaDefinition
      label
      id
      updatedAt
      userId
    }
  }
`;
