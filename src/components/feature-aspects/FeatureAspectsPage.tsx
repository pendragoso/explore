import styled from 'styled-components';

import { SplitPanel } from '@zonos/amino/components/split-panel/SplitPanel';

import { useGraphQl } from 'src/hooks/useGraphQl';

import { FeatureAspectSplitCoverSheet } from './FeatureAspectSplitCoverSheet';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const FeatureAspectsPage = () => {
  const { data } = useGraphQl({
    endpoint: 'frontend/getFeatureAspectAudiences',
  });
  const aspects = data?.json?.feature_aspect;
  const audiences = data?.json?.feature_audience;

  return (
    <Wrapper>
      <SplitPanel>
        <div>
          {aspects?.map(x => (
            <div key={x.key}>{x.key}</div>
          ))}
        </div>
        <div>
          {audiences?.map(x => (
            <div key={x.name}>{x.name}</div>
          ))}
        </div>
      </SplitPanel>

      <FeatureAspectSplitCoverSheet />
    </Wrapper>
  );
};
