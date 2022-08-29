import { FC } from 'react';

import { ITheme } from '../theme';
import { Typography, TypographyProps } from '../typography';
import * as Styled from './styled';

export type BadgeProps = {
  variant?: keyof ITheme['colors'];
  bgColor?: string;
} & Omit<TypographyProps, 'variant'>;

export const Badge: FC<BadgeProps> = ({ children, variant, bgColor = '#fff' }) => {
  return (
    <Styled.BadgeContainer variant={variant} bgColor={bgColor}>
      <Typography variant="body" weight="bold">
        {children}
      </Typography>
    </Styled.BadgeContainer>
  );
};
