import styled from 'styled-components';

type BackgroundImageProps = {
  width: number;
  height: number;
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  position: absolute;
  max-height: ${({ height }) => height}px;
  padding-bottom: ${({ width, height }) => (height / width) * 100}%;
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.32) 100%),
    url(${({ imageUrl }) => imageUrl}) center center / cover no-repeat;
`;
