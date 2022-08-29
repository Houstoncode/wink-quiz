import styled from 'styled-components';

// TODO: FIX TS ERROR | the type extension didn't work
// @ts-ignore
import { ReactComponent as ArrowSvgIcon } from '@/shared/assets/arrow.svg';

export const ArrowIcon = styled(ArrowSvgIcon)`
  width: 18px;
  height: 18px;
`;

export const NavigateButtonLeft = styled.button`
  position: absolute;
  top: 50%;
  left: -26px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000040;
  border-radius: 100%;
  outline: none;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;

  &:hover {
    background-color: #00000080;
    transition: 0.2s cubic-bezier(0.075, 0.82, 0.165, 1) background-image;
  }
`;

export const NavigateButtonRight = styled(NavigateButtonLeft)`
  left: unset;
  right: -26px;
  transform: translateY(-50%) rotate(180deg);
`;
