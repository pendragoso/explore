import { gql } from 'graphql-request';

export const insertGraphHubCategoryLabel = gql`
  mutation insertGraphHubCategoryLabel(
    $objects: [graphHub_categoryLabel_insert_input!]!
  ) {
    insert_graphHub_categoryLabel(objects: $objects) {
      affected_rows
      returning {
        set
      }
    }
  }
`;

export const insertGraphHubCategory = gql`
  mutation insertGraphHubCategory(
    $objects: [graphHub_category_insert_input!]!
  ) {
    insert_graphHub_category(objects: $objects) {
      affected_rows
      returning {
        createdAt
        id
        label
        updatedAt
      }
    }
  }
`;
