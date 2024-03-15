import { gql } from 'graphql-request';

export const getGraphHubDeployedInstance = gql`
  query getGraphHubDeployedInstance($id: bigint!) {
    graphHub_deployedInstance_by_pk(id: $id) {
      categoryId
      createdAt
      id
      query
      deployedSchema {
        schemaDefinition
        label
        id
      }
      deployedSchemaId
      updatedAt
      userId
      variables
    }
  }
`;

export const getGraphHubDraftInstance = gql`
  query getGraphHubDraftInstance($id: bigint!) {
    graphHub_draftInstance_by_pk(id: $id) {
      categoryId
      createdAt
      id
      query
      draftSchema {
        schemaDefinition
        label
        userId
        id
      }
      draftSchemaId
      updatedAt
      userId
      variables
    }
  }
`;
