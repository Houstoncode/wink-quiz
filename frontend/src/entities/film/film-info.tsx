import { Badge } from '@/shared/lib/badge';
import { Typography } from '@/shared/lib/typography';

import * as Styled from './film-info.styled';
import { FilmInfoRating } from './film-info-rating';

export const FilmInfo = () => {
  return (
    <Styled.Container>
      <Styled.LeftSide>
        <Styled.FilmInfoTags>
          <Badge variant="danger">Детям</Badge>
          <Badge variant="purple">Новинка</Badge>
          <Badge bgColor="#00000080">6+</Badge>
        </Styled.FilmInfoTags>
        <Typography variant="h1">Cупергеройские фильмы Marvel</Typography>
        <Typography variant="h3" weight="bold">
          Захватывающее анимационное фэнтези от Marvel
        </Typography>
      </Styled.LeftSide>
      <Styled.RightSide>
        <FilmInfoRating />
      </Styled.RightSide>
    </Styled.Container>
  );
};
