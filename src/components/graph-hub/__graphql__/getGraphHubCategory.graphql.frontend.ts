import { gql } from 'graphql-request';

export const getGraphHubCategory = gql`
  query getGraphHubCategory {
    graphHub_category {
      id
      createdAt
      label
      updatedAt
    }
  }
`;
