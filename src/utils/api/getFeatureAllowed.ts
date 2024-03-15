import compact from 'lodash/compact';

import type { IUser } from 'src/types';
import type { Feature_AspectKey_Enum } from 'src/types/generated/graphql.frontend.types';
import { getFrontendGraphQlVariables } from 'src/utils/api/getGraphQlVariables';
import { gqlRequest } from 'src/utils/gqlRequest';

type Props = {
  featureKey: Feature_AspectKey_Enum;
  user: IUser;
};

export const getFeatureAllowed = async ({ featureKey, user }: Props) => {
  const graphQlVariables = await getFrontendGraphQlVariables({
    req: null,
    user: null,
  });

  if (user.email) {
    const { errors, json } = await gqlRequest({
      customUrl: graphQlVariables.url,
      endpoint: 'frontend/getAudienceByAspectKey',
      requestHeaders: graphQlVariables.headers,
      variables: {
        aspectKey: featureKey,
      },
    });
    const entityEmails = compact(
      json?.feature_audienceAspectLink.flatMap(feature =>
        feature.audience.entityLinks.map(entityLink => entityLink.entity.email)
      )
    );

    if (errors.length) {
      console.error(errors);
      return false;
    }

    return entityEmails.includes(user.email);
  }

  return false;
};
