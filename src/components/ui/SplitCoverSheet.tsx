import React, { type ReactNode, Children } from 'react';

import styled from 'styled-components';

import { SplitPanel } from '@zonos/amino/components/split-panel/SplitPanel';
import { theme } from '@zonos/amino/styles/constants/theme';

type Props = {
  children: ReactNode;
};

const StyledDiv = styled.div`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: white;
  border-left: 1px solid ${theme.gray200};
  .split-view-container {
    max-width: 100vw;
  }
`;

export const SplitCoverSheet = ({ children }: Props) => {
  const childrenLength = Children.count(children);
  return (
    <StyledDiv
      style={{
        width: childrenLength < 2 ? `calc(50vw * ${childrenLength})` : `100vw`,
      }}
    >
      <SplitPanel>{children}</SplitPanel>
    </StyledDiv>
  );
};
