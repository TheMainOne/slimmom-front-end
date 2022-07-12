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
  const TabletWidth = width >= 768;
  const DesktopWidth = width >= 1280;

  return (
    <>
      <HeaderStyled>
        {resizeListener}
        <Container>
          <HeaderNavigation>
            <div>
              <Logo isLogged={isLogged} />
            </div>

            <HeaderLinksWrapper>
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
              {isLogged && TabletWidth && (
                <>
                  <UserInfo />
                  <MenuIcon fontSize="medium" />
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
