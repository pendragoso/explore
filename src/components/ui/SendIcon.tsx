import styled from 'styled-components';

import { theme } from '@zonos/amino/styles/constants/theme';
import type { Color } from '@zonos/amino/types';

const StyledSvg = styled.svg`
  transform: rotate(90deg);
  width: 1.2em;
  height: 1.2em;
  fill: currentColor;
`;

type Props = {
  className?: string;
  color?: Color;
};
export const SendIcon = ({ className, color = 'blue600' }: Props) => (
  <StyledSvg
    className={className}
    color={theme[color]}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
  </StyledSvg>
);
