import type { ReactNode } from 'react';

import styled from 'styled-components';

import { VStack } from '@zonos/amino/components/stack/VStack';
import { Text } from '@zonos/amino/components/text/Text';
import { theme } from '@zonos/amino/styles/constants/theme';

const StyledWrapper = styled.div`
  display: flex;
  gap: ${theme.space16};
  flex-direction: column;
  padding: ${theme.space16};
`;

const StyledActionGroup = styled.div`
  display: flex;
  gap: ${theme.space16};
  align-items: top;
`;

const StyledActionWrapper = styled.div`
  display: flex;
  gap: ${theme.space16};
`;

const StyledText = styled(Text)`
  flex: 1;
`;

type Props = { actions?: ReactNode; children: ReactNode; title: string };

export const ImportSchemaWrapper = ({ actions, children, title }: Props) => (
  <StyledWrapper>
    <StyledActionGroup>
      <StyledText type="header">{title}</StyledText>
      {actions && <StyledActionWrapper>{actions}</StyledActionWrapper>}
    </StyledActionGroup>
    <VStack spacing={24}>{children}</VStack>
  </StyledWrapper>
);
