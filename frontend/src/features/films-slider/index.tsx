import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { useCallback, useMemo, useState } from 'react';

import { FilmInfo } from '@/entities';
import { BackgroundImage } from '@/shared/lib/background-image/styled';

import { mockData } from './mock';
import { Navigation } from './navigation';
import * as Styled from './styled';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const FilmSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const itemIndex = useMemo(() => wrap(0, mockData.length, page), [page]);

  const handlePaginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  return (
    <Styled.ContainerWithDark>
      <AnimatePresence initial={false} custom={direction}>
        <BackgroundImage
          key={page}
          as={motion.div}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 50 },
            opacity: { duration: 0.2 },
          }}
          imageUrl={mockData[itemIndex].url}
          width={1177}
          height={367}
        >
          <FilmInfo />
          <Navigation handlePaginate={handlePaginate} />
        </BackgroundImage>
      </AnimatePresence>
    </Styled.ContainerWithDark>
  );
};
