import { gql } from 'graphql-request';

export const upsertGraphHubDeployedSchema = gql`
  mutation upsertGraphHubDeployedSchema(
    $objects: [graphHub_deployedSchema_insert_input!]!
  ) {
    insert_graphHub_deployedSchema(objects: $objects) {
      affected_rows
      returning {
        createdAt
        schemaDefinition
        id
        label
        updatedAt
      }
    }
  }
`;

export const upsertGraphHubDraftSchema = gql`
  mutation upsertGraphHubDraftSchema(
    $objects: [graphHub_draftSchema_insert_input!]!
  ) {
    insert_graphHub_draftSchema(objects: $objects) {
      affected_rows
      returning {
        createdAt
        schemaDefinition
        id
        label
        userId
        updatedAt
      }
    }
  }
`;
