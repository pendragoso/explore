import { gql } from 'graphql-request';

export const getDraftSchemaWithChunksById = gql`
  query getDraftSchemaWithChunksById($id: bigint!) {
    graphHub_draftSchemaChunk(
      where: { draftSchemaId: { _eq: $id } }
      order_by: { apiReferenceDataLabel: asc_nulls_last }
    ) {
      id
      apiReferenceDataLabel
      apiReferenceData
      schemaDefinition
      draftSchemaId
      userId
      chatCompletionOption {
        result
        meta
      }
    }
    graphHub_draftSchema(where: { id: { _eq: $id } }) {
      schemaDefinition
      label
    }
  }
`;
