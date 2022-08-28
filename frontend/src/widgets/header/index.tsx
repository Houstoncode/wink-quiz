import { Link } from '@/shared/lib';

import * as Styled from './styled';

export const Header = () => {
  return (
    <Styled.Container>
      <Styled.LeftSide>
        <Link to="/">
          <Styled.Logo />
        </Link>
        <Styled.Navbar>
          <Styled.NavbarMenu>
            <Styled.NavbarMenuItem>
              <Link to="/">Фильмы</Link>
            </Styled.NavbarMenuItem>
            <Styled.NavbarMenuItem>
              <Link to="/stocks">Сериалы</Link>
            </Styled.NavbarMenuItem>
            <Styled.NavbarMenuItem>
              <Link to="/">Мультфильмы</Link>
            </Styled.NavbarMenuItem>
            <Styled.NavbarMenuItem>
              <Link to="/">Акции</Link>
            </Styled.NavbarMenuItem>
          </Styled.NavbarMenu>
        </Styled.Navbar>
      </Styled.LeftSide>
      <Styled.RightSide>
        <Styled.NavbarMenu>
          <Styled.NavbarMenuItem>
            <Link to="/">Вход</Link>
          </Styled.NavbarMenuItem>
          <Styled.NavbarMenuItem>
            <Link to="/">Регистрация</Link>
          </Styled.NavbarMenuItem>
        </Styled.NavbarMenu>
      </Styled.RightSide>
    </Styled.Container>
  );
};
