import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { FilmSlider } from '@/features/films-slider';
import { Header } from '@/widgets';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1176px;
  margin: auto;
`;

export const DefaultLayout: FC = () => (
  <>
    <Header />
    <Container>
      <FilmSlider />
      <Outlet />
    </Container>
  </>
);
