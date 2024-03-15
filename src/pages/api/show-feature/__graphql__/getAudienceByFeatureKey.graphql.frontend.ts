import { gql } from 'graphql-request';

export const GetAudienceByAspectKey = gql`
  query getAudienceByAspectKey($aspectKey: feature_aspectKey_enum!) {
    feature_audienceAspectLink(
      where: { aspect: { key: { _eq: $aspectKey } } }
    ) {
      audience {
        name
        entityLinks {
          entity {
            email
          }
        }
      }
    }
  }
`;
