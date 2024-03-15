import { gql } from 'graphql-request';

export const insertGraphHubDeployedInstance = gql`
  mutation insertGraphHubDeployedInstance(
    $objects: [graphHub_deployedInstance_insert_input!] = {}
  ) {
    insert_graphHub_deployedInstance(objects: $objects) {
      affected_rows
      returning {
        id
        query
        updatedAt
        userId
        variables
        categoryId
        createdAt
        deployedSchemaId
        category {
          createdAt
          id
          label
          updatedAt
        }
        deployedSchema {
          createdAt
          schemaDefinition
          id
          label
          updatedAt
        }
      }
    }
  }
`;

export const insertGraphHubDraftInstance = gql`
  mutation insertGraphHubDraftInstance(
    $objects: [graphHub_draftInstance_insert_input!] = {}
  ) {
    insert_graphHub_draftInstance(objects: $objects) {
      affected_rows
      returning {
        id
        query
        updatedAt
        userId
        variables
        categoryId
        createdAt
        draftSchemaId
        category {
          createdAt
          id
          label
          updatedAt
        }
        draftSchema {
          userId
          createdAt
          schemaDefinition
          id
          label
          updatedAt
        }
      }
    }
  }
`;
