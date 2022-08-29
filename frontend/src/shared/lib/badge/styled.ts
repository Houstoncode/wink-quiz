import styled from 'styled-components';

import { baseTheme } from '../theme';
import { BadgeProps } from '.';

export const BadgeContainer = styled.div<BadgeProps>`
  letter-spacing: 1px;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0px 0.3ex;
  padding: 0px calc(0.48ex + 4px);
  vertical-align: middle;
  display: inline-block;
  background-color: ${({ bgColor, variant }) =>
    variant ? baseTheme.colors[variant] : bgColor};
  user-select: none;
`;
