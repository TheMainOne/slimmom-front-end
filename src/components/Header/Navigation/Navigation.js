import Logo from '../Logo';
import {
  HeaderStyled,
  HeaderNavigation,
  HeaderLink,
  HeaderLinksWrapper,
} from './Navigation.styled';

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderNavigation>
          <div>
            <Logo />
          </div>
          <HeaderLinksWrapper>
            <HeaderLink to="/login">Sign in</HeaderLink>
            <HeaderLink to="/signup">Registration</HeaderLink>
          </HeaderLinksWrapper>
        </HeaderNavigation>
      </HeaderStyled>
    </>
  );
};

export default Header;
