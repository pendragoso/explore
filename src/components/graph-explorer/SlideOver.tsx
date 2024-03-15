import type { ReactNode } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

import styled from 'styled-components';

import { Button } from '@zonos/amino/components/button/Button';
import { Text } from '@zonos/amino/components/text/Text';
import { RemoveIcon } from '@zonos/amino/icons/RemoveIcon';
import { theme } from '@zonos/amino/styles/constants/theme';

const StyleSidebar = styled.div<{ $width: string }>`
  position: fixed;
  right: -${props => props.$width};
  top: 0;
  width: ${props => props.$width};
  height: 100%;
  z-index: -2;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: ${theme.space8};
  padding: ${theme.space8};
  box-shadow: 0 0 5px ${theme.gray400};
  &.open {
    right: 0;
    visibility: visible;
    opacity: 1;
    z-index: 7;
  }
`;

const StyledActionWrapper = styled.div``;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 1;
`;

const StyledWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${theme.space8};
  overflow: auto;
`;

const StyledTitle = styled(Text)`
  flex-grow: 1;
  text-align: center;
  align-items: center;
`;

type Props = {
  children: ReactNode;
  className?: string;
  open: boolean;
  title: string;
  width: string;
  onClose: () => void;
};

export const SlideOver = ({
  children,
  className,
  onClose,
  open,
  title,
  width,
}: Props) => {
  useHotkeys('esc', onClose);

  return (
    <StyleSidebar
      $width={width}
      className={[className || '', open ? 'open' : ''].join(' ')}
    >
      <StyledHeader>
        <StyledTitle type="title">{title}</StyledTitle>
        <StyledActionWrapper>
          <Button icon={<RemoveIcon />} onClick={onClose} />
        </StyledActionWrapper>
      </StyledHeader>
      <StyledWrapper>{children}</StyledWrapper>
    </StyleSidebar>
  );
};
