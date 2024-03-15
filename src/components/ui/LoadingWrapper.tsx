import { type ReactNode, useEffect, useState } from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = { children: ReactNode };

export const LoadingWrapper = ({ children }: Props) => {
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    // will not show the loading icon if dom is not ready
    // avoid loading position issue
    if (firstLoad) {
      setFirstLoad(false);
    }
  }, [firstLoad]);
  return <StyledWrapper>{!firstLoad && children}</StyledWrapper>;
};
