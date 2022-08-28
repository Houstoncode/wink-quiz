import { FC } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import styled from 'styled-components';

import { Typography, TypographyProps } from '../typography';

type LinkProps = RouterLinkProps & TypographyProps;

const StyledLink = styled(RouterLink)<LinkProps>`
  text-decoration: none;
`;

export const Link: FC<LinkProps> = ({ children, color, to = '/', variant = 'link' }) => {
  return (
    <StyledLink to={to}>
      <Typography variant={variant} color={color}>
        {children}
      </Typography>
    </StyledLink>
  );
};
