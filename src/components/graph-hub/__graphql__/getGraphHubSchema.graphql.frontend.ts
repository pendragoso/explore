import { gql } from 'graphql-request';

export const getGraphHubSchema = gql`
  query getGraphHubSchema(
    $draftSchemaWhere: graphHub_draftSchema_bool_exp = null
    $draftSchemaOrderBy: [graphHub_draftSchema_order_by!]
  ) {
    graphHub_deployedSchema {
      id
      label
    }

    graphHub_draftSchema(
      where: $draftSchemaWhere
      order_by: $draftSchemaOrderBy
    ) {
      id
      label
      updatedAt
      userId
    }
  }
`;
