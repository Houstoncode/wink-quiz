import { FC } from 'react';
import styled, { CSSObject } from 'styled-components';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'link';

export type TypographyProps = {
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'a';
  variant?: TypographyVariant;
  weight?: CSSObject['fontWeight'] | number;
  size?: CSSObject['fontSize'];
  color?: string;
};

const Text = styled.div<TypographyProps>`
  font-size: ${({ theme, size, variant = 'body' }) =>
    size ? size : theme.typography.sizes[variant]};
  font-weight: ${({ theme, weight, variant = 'body' }) =>
    weight ? weight : theme.typography.weights[variant]};
  color: ${({ theme, variant = 'body', color }) =>
    color || theme.typography.colors[variant]};
`;

export const Typography: FC<TypographyProps> = ({
  children,
  color,
  weight,
  size,
  variant = 'body',
  as = 'span',
}) => {
  return (
    <Text as={as} weight={weight} variant={variant} color={color} size={size}>
      {children}
    </Text>
  );
};
