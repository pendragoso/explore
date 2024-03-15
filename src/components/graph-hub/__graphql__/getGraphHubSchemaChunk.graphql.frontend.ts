import { gql } from 'graphql-request';

export const getGraphHubDeployedSchemaChunk = gql`
  query getGraphHubDeployedSchemaChunk($limit: Int = 10, $offset: Int) {
    graphHub_deployedSchemaChunk(
      limit: $limit
      offset: $offset
      order_by: { deployedSchema: { id: desc }, updatedAt: desc }
    ) {
      id
      bulkJobId
      apiReferenceDataLabel
      deployedSchemaId
      deployedSchema {
        label
      }
      chatCompletionOption {
        messages
        result
      }
      createdAt
      updatedAt
    }
  }
`;

export const getGraphHubDraftSchemaChunk = gql`
  query getGraphHubDraftSchemaChunk($limit: Int = 10, $offset: Int) {
    graphHub_draftSchemaChunk(
      limit: $limit
      offset: $offset
      order_by: {
        draftSchema: { id: desc }
        updatedAt: desc
        apiReferenceDataLabel: asc_nulls_last
      }
    ) {
      id
      apiReferenceDataLabel
      draftSchemaId
      draftSchema {
        label
      }
      chatCompletionOption {
        errorId
        result
        retries
      }
      bulkJobId
      createdAt
      updatedAt
    }
  }
`;
