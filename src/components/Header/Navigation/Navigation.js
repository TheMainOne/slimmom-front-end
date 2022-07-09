import Logo from '../Logo';
import {
  HeaderStyled,
  HeaderNavigation,
  HeaderLink,
} from './Navigation.styled';

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderNavigation>
          <Logo />
          <div>
            <HeaderLink to="/login">Sign in</HeaderLink>
            <HeaderLink to="/signup">Registration</HeaderLink>
          </div>
        </HeaderNavigation>
      </HeaderStyled>
    </>
  );
};

export default Header;
