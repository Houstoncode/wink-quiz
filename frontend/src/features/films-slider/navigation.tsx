import { FC, useCallback } from 'react';

import * as Styled from './navigation.styled';

type Props = {
  handlePaginate: (newDirection: number) => void;
};

export const Navigation: FC<Props> = ({ handlePaginate }) => {
  const handleBack = useCallback(() => handlePaginate(-1), []);
  const handleNext = useCallback(() => handlePaginate(1), []);

  return (
    <>
      <Styled.NavigateButtonLeft onClick={handleBack}>
        <Styled.ArrowIcon></Styled.ArrowIcon>
      </Styled.NavigateButtonLeft>
      <Styled.NavigateButtonRight onClick={handleNext}>
        <Styled.ArrowIcon></Styled.ArrowIcon>
      </Styled.NavigateButtonRight>
    </>
  );
};
