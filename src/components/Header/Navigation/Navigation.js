import React from 'react';
import useResizeAware from 'react-resize-aware';
import Logo from '../Logo';
import MenuIcon from '@mui/icons-material/Menu';
import Container from 'components/Container';
import { useSelector } from 'react-redux';
import UserInfo from '../UserInfo';
import {
  HeaderStyled,
  HeaderNavigation,
  HeaderLink,
  HeaderLinksWrapper,
} from './Navigation.styled';
import { getIsLoggedIn } from 'redux/auth/authSelector';

const styles = {
  link: {
    fontWeight: '700',
  },
  isHidden: {
    display: 'none',
  },
};

const Header = () => {
  const [resizeListener, { width }] = useResizeAware();
  const isLogged = useSelector(state => getIsLoggedIn(state));
  const mobileWidth = width <= 767;
  const tabletWidth = width >= 768 && width < 1279;
  const desktopWidth = width >= 1280;

  return (
    <>
      <HeaderStyled isLogged={isLogged}>
        {resizeListener}
        <Container>
          <HeaderNavigation>
            <div>
              <Logo isLogged={isLogged} />
            </div>

            <HeaderLinksWrapper isLogged={isLogged}>
              {!isLogged && (
                <>
                  <HeaderLink
                    to="/login"
                    stylehidden={styles.isHidden}
                    style={styles.link}
                  >
                    Sign in
                  </HeaderLink>
                  <HeaderLink
                    to="/signup"
                    stylehidden={styles.isHidden}
                    style={styles.link}
                  >
                    Registration
                  </HeaderLink>
                </>
              )}
              {isLogged && mobileWidth && (
                <>
                  <MenuIcon fontSize="medium" />
                </>
              )}
              {isLogged && tabletWidth && (
                <>
                  <UserInfo />
                  <MenuIcon fontSize="medium" />
                </>
              )}
              {isLogged && desktopWidth && (
                <>
                  <div>
                    <HeaderLink
                      to="/diary"
                      stylehidden={styles.isHidden}
                      style={styles.link}
                    >
                      Diary
                    </HeaderLink>
                    <HeaderLink
                      to="/calculator"
                      stylehidden={styles.isHidden}
                      style={styles.link}
                    >
                      Calculator
                    </HeaderLink>
                  </div>
                  <UserInfo />
                </>
              )}
            </HeaderLinksWrapper>
          </HeaderNavigation>
        </Container>
      </HeaderStyled>
    </>
  );
};

export default Header;
