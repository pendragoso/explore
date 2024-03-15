import { useState } from 'react';

import { Button } from '@zonos/amino/components/button/Button';

import { useGraphQl } from 'src/hooks/useGraphQl';

import { SplitCoverSheet } from '../ui/SplitCoverSheet';

export const FeatureAspectSplitCoverSheet = () => {
  const [open, setOpen] = useState(false);

  const { data } = useGraphQl({
    endpoint: 'frontend/getFeatureAspectAudiences',
  });

  const aspects = data?.json?.feature_aspect;
  return (
    <>
      <Button onClick={() => setOpen(open)}>Create feature aspect</Button>
      {!!aspects && <SplitCoverSheet>Cheese</SplitCoverSheet>}
    </>
  );
};
