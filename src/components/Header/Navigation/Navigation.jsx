import React from 'react';
import useResizeAware from 'react-resize-aware';
import Logo from '../Logo';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Container from 'components/Container';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import UserInfo from '../UserInfo';
import {
  HeaderStyled,
  HeaderNavigation,
  HeaderLink,
  HeaderLinksWrapper,
  MobileNavigation,
  MobileNavigationItem,
  MobileNavigationLink,
} from './Navigation.styled';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import IconButton from 'components/IconButton';
import { createPortal } from 'react-dom';
import { getRefs } from 'utils';

const { mobileMenuRoot } = getRefs();

const styles = {
  link: {
    fontWeight: '700',
  },
};

const NavigationForGuest = () => (
  <>
    <HeaderLink to="/login" style={styles.link}>
      Sign in
    </HeaderLink>
    <HeaderLink to="/signup" style={styles.link}>
      Registration
    </HeaderLink>
  </>
);

const NavigationOnMobile = ({ visibleMenu, handleMenuBtnClick }) => (
  <>
    {visibleMenu ? (
      <>
        <IconButton
          color="#212121"
          hoverBgColor="#e76000"
          icon={<CloseIcon />}
          onClick={handleMenuBtnClick}
        />

        {createPortal(
          <MobileNavigation onClick={handleMenuBtnClick}>
            <MobileNavigationItem>
              <MobileNavigationLink to="/diary">diary</MobileNavigationLink>
            </MobileNavigationItem>
            <MobileNavigationItem>
              <MobileNavigationLink to="/calculator">
                calculator
              </MobileNavigationLink>
            </MobileNavigationItem>
          </MobileNavigation>,
          mobileMenuRoot
        )}
      </>
    ) : (
      <IconButton
        color="#212121"
        hoverBgColor="#e76000"
        icon={<MenuIcon />}
        onClick={handleMenuBtnClick}
      />
    )}
  </>
);

const Header = () => {
  const [resizeListener, { width }] = useResizeAware();
  const isLogged = useSelector(getIsLoggedIn);
  const mobileWidth = width <= 767;
  const tabletWidth = width >= 768 && width < 1279;
  const desktopWidth = width >= 1280;

  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenuBtnClick = () => setVisibleMenu(prev => !prev);

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
              {!isLogged && <NavigationForGuest />}
              {isLogged && mobileWidth && (
                <div>
                  <NavigationOnMobile
                    visibleMenu={visibleMenu}
                    handleMenuBtnClick={handleMenuBtnClick}
                  />
                </div>
              )}

              {isLogged && tabletWidth && (
                <>
                  <UserInfo />
                  <NavigationOnMobile
                    visibleMenu={visibleMenu}
                    handleMenuBtnClick={handleMenuBtnClick}
                  />
                </>
              )}
              {isLogged && desktopWidth && (
                <>
                  <div>
                    <HeaderLink to="/diary" style={styles.link}>
                      Diary
                    </HeaderLink>
                    <HeaderLink to="/calculator" style={styles.link}>
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
      {isLogged && mobileWidth && (
        <>
          <UserInfo />
        </>
      )}
    </>
  );
};

export default Header;
