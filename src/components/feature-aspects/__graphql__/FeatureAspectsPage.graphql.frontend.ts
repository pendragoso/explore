import { gql } from 'graphql-request';

export const GetFeatureAspectAudiences = gql`
  query getFeatureAspectAudiences {
    feature_audience {
      id
      name
    }
    feature_aspect {
      id
      key
      aspectLinks {
        audience {
          name
        }
      }
    }
  }
`;
