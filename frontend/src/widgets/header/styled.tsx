import styled from 'styled-components';

// TODO: FIX TS ERROR | the type extension didn't work
// @ts-ignore
import { ReactComponent as LogoIcon } from '@/shared/assets/logo.svg';

export const Container = styled.div`
  display: flex;
  max-width: 1176px;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  margin: auto;
  gap: 48px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 16px;
  align-items: center;
`;

export const RightSide = styled(LeftSide)``;

export const Navbar = styled.nav`
  display: flex;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  gap: 16px;
  list-style: none;
  color: #fff;
  align-items: center;
`;

export const NavbarMenuItem = styled.li`
  letter-spacing: -0.02em;
  line-height: 21px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.1s linear;

  &:hover {
    background-color: #ffffff0f;
  }
`;

export const Logo = styled(LogoIcon)`
  width: 87px;
  height: 26px;
`;
