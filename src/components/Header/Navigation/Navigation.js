import Logo from '../Logo';
import Container from 'components/Container';
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
        <Container>
          <HeaderNavigation>
            <div>
              <Logo />
            </div>
            <HeaderLinksWrapper>
              <HeaderLink to="/login">Sign in</HeaderLink>
              <HeaderLink to="/signup">Registration</HeaderLink>
              {/* <HeaderLink to="/diary">Diary</HeaderLink> */}
            </HeaderLinksWrapper>
          </HeaderNavigation>
        </Container>
      </HeaderStyled>
    </>
  );
};

export default Header;
