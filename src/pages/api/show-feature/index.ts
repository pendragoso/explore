import type { NextApiRequest, NextApiResponse } from 'next';

import { getMiddlewareHeader } from 'src/middleware';
import type { Feature_AspectKey_Enum } from 'src/types/generated/graphql.frontend.types';
import { getFeatureAllowed } from 'src/utils/api/getFeatureAllowed';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const user = getMiddlewareHeader({ key: 'x-internal-middleware-user', req });

  const featureKey = req.query.aspectKey as Feature_AspectKey_Enum;

  const allowed = await getFeatureAllowed({
    featureKey,
    user,
  });

  res.status(200).json(allowed);
};

export default handler;
