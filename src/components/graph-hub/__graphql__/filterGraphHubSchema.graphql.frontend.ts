import { gql } from 'graphql-request';

export const filterGraphHubDeployedSchema = gql`
  query filterGraphHubDeployedSchema(
    $where: graphHub_deployedSchema_bool_exp
    $order_by: [graphHub_deployedSchema_order_by!]
  ) {
    graphHub_deployedSchema(where: $where, order_by: $order_by) {
      id
      label
      updatedAt
      createdAt
    }
  }
`;

export const filterGraphHubDeployedSchemaChunk = gql`
  query filterGraphHubDeployedSchemaChunk(
    $where: graphHub_deployedSchemaChunk_bool_exp
    $order_by: [graphHub_deployedSchemaChunk_order_by!]
  ) {
    graphHub_deployedSchemaChunk(where: $where, order_by: $order_by) {
      id
      apiReferenceData
      apiReferenceDataLabel
      chatCompletionOption {
        result
        errorId
      }
      schemaDefinition
    }
  }
`;
export const filterGraphHubDraftSchema = gql`
  query filterGraphHubDraftSchema(
    $where: graphHub_draftSchema_bool_exp
    $order_by: [graphHub_draftSchema_order_by!]
  ) {
    graphHub_draftSchema(where: $where, order_by: $order_by) {
      id
      label
      updatedAt
      createdAt
    }
  }
`;

export const filterGraphHubDraftSchemaChunk = gql`
  query filterGraphHubDraftSchemaChunk(
    $where: graphHub_draftSchemaChunk_bool_exp
    $order_by: [graphHub_draftSchemaChunk_order_by!]
  ) {
    graphHub_draftSchemaChunk(where: $where, order_by: $order_by) {
      id
      schemaDefinition
      chatCompletionOption {
        errorId
        result
        messages
        meta
        maxTokens
        logitBias
        id
        frequencyPenalty
        model
        n
        presencePenalty
        stop
        temperature
        topP
        user
      }
    }
  }
`;
