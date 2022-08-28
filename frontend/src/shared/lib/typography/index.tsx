import { FC } from 'react';
import styled from 'styled-components';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'link';

export type TypographyProps = {
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'a';
  variant?: TypographyVariant;
  color?: string;
};

const Text = styled.div<TypographyProps>`
  font-size: ${({ theme, variant = 'body' }) => theme.typography.sizes[variant]};
  font-weight: ${({ theme, variant = 'body' }) => theme.typography.weights[variant]};
  color: ${({ theme, variant = 'body', color }) =>
    color || theme.typography.colors[variant]};
`;

export const Typography: FC<TypographyProps> = ({
  children,
  color,
  variant = 'body',
  as = 'span',
}) => {
  return (
    <Text as={as} variant={variant} color={color}>
      {children}
    </Text>
  );
};
