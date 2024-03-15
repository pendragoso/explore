import { gql } from 'graphql-request';

const chatCompletionOptionFragment = gql`
  fragment ChatCompletionOptionFragment on prompt_chatCompletionOption {
    bulkJobId
    createdAt
    frequencyPenalty
    id
    maxTokens
    messages
    model
    n
    presencePenalty
    result
    stop
    temperature
    topP
    user
    updatedAt
  }
`;

export const upsertGraphHubDeployedSchemaChunk = gql`
  mutation upsertGraphHubDeployedSchemaChunk(
    $objects: [graphHub_deployedSchemaChunk_insert_input!]!
  ) {
    insert_graphHub_deployedSchemaChunk(
      objects: $objects
      on_conflict: {
        constraint: deployedSchemaChunk_pkey
        update_columns: [
          chatCompletionOptionId
          apiReferenceData
          apiReferenceDataLabel
          bulkJobId
        ]
      }
    ) {
      returning {
        createdAt
        chatCompletionOption {
          ...ChatCompletionOptionFragment
        }
        bulkJobId
        deployedSchemaId
        deployedSchema {
          createdAt
          schemaDefinition
          id
          label
          updatedAt
        }
        id
        updatedAt
      }
    }
  }
  ${chatCompletionOptionFragment}
`;

export const upsertGraphHubDraftSchemaChunk = gql`
  mutation upsertGraphHubDraftSchemaChunk(
    $objects: [graphHub_draftSchemaChunk_insert_input!]!
  ) {
    insert_graphHub_draftSchemaChunk(
      objects: $objects
      on_conflict: {
        constraint: draftSchemaChunk_pkey
        update_columns: [
          chatCompletionOptionId
          apiReferenceData
          apiReferenceDataLabel
          bulkJobId
        ]
      }
    ) {
      returning {
        createdAt
        chatCompletionOption {
          ...ChatCompletionOptionFragment
        }
        bulkJobId
        draftSchemaId
        draftSchema {
          createdAt
          schemaDefinition
          id
          label
          updatedAt
        }
        id
        updatedAt
      }
    }
  }

  ${chatCompletionOptionFragment}
`;
