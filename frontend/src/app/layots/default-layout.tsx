import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '@/widgets';

const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DefaultLayout: FC<Props> = () => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </>
);
