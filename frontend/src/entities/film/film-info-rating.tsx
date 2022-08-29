import { Typography } from '@/shared/lib/typography';

import * as Styled from './film-info-rating.styled';

export const FilmInfoRating = () => {
  return (
    <Styled.Container>
      <Styled.FilmInfoRatingItem>
        <Typography variant="h2">8.5</Typography>
        <Typography size="12px" weight="bold">
          Wink
        </Typography>
      </Styled.FilmInfoRatingItem>
      <Styled.FilmInfoRatingItem>
        <Typography variant="h2">7.6</Typography>
        <Typography size="12px" weight="bold">
          Кинопоиск
        </Typography>
      </Styled.FilmInfoRatingItem>
      <Styled.FilmInfoRatingItem>
        <Typography variant="h2">7.4</Typography>
        <Typography size="12px" weight="bold">
          IMDb
        </Typography>
      </Styled.FilmInfoRatingItem>
    </Styled.Container>
  );
};
