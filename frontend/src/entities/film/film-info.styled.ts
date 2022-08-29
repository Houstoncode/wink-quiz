import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  bottom: 30px;
  left: 40px;
  right: 40px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const RightSide = styled.div`
  display: flex;
`;

export const FilmInfoTags = styled.div`
  display: flex;
  gap: 8px;
`;

export const FilmInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
