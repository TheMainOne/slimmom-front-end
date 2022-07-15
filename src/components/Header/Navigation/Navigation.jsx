import React from 'react';
import useResizeAware from 'react-resize-aware';
import Logo from '../Logo';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Container from 'components/Container';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
import { useTranslation } from 'react-i18next';

const styles = {
  link: {
    fontWeight: '700',
  },
  isHidden: {
    display: 'none',
  },
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const bannedPaths = [];
  const isHidden = bannedPaths.some(bannedPath => bannedPath === pathname);

  const [resizeListener, { width }] = useResizeAware();
  const isLogged = useSelector(state => getIsLoggedIn(state));
  const mobileWidth = width <= 767;
  const tabletWidth = width >= 768 && width < 1279;
  const desktopWidth = width >= 1280;

  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenuBtnClick = () => {
    setVisibleMenu(prev => !prev);
  };
  const changeLanguage = ln => {
    return () => {
      i18n.changeLanguage(ln);
    };
  };
  return (
    <>
      <HeaderStyled isLogged={isLogged}>
        {resizeListener}
        <Container>
          <HeaderNavigation>
            <div>
              <Logo isLogged={isLogged} />
            </div>

            <HeaderLinksWrapper isLogged={isLogged} isHidden={isHidden}>
              {!isLogged && (
                <>
                  <HeaderLink
                    to="/login"
                    stylehidden={styles.isHidden}
                    style={styles.link}
                  >
                    {t('signIn')}
                  </HeaderLink>
                  <HeaderLink
                    to="/signup"
                    stylehidden={styles.isHidden}
                    style={styles.link}
                  >
                    {t('registration')}
                  </HeaderLink>
                </>
              )}
              {isLogged && mobileWidth && (
                <div>
                  {visibleMenu ? (
                    <>
                      <CloseIcon onClick={handleMenuBtnClick} />
                      <MobileNavigation onClick={handleMenuBtnClick}>
                        <MobileNavigationItem>
                          <MobileNavigationLink to="/diary">
                            {t('diary')}
                          </MobileNavigationLink>
                        </MobileNavigationItem>
                        <MobileNavigationItem>
                          <MobileNavigationLink to="/calculator">
                            {t('calculator')}
                          </MobileNavigationLink>
                        </MobileNavigationItem>
                      </MobileNavigation>
                    </>
                  ) : (
                    <MenuIcon onClick={handleMenuBtnClick} />
                  )}
                </div>
              )}
              {isLogged && tabletWidth && (
                <>
                  <UserInfo />
                  {visibleMenu ? (
                    <>
                      <CloseIcon onClick={handleMenuBtnClick} />
                      <MobileNavigation onClick={handleMenuBtnClick}>
                        <MobileNavigationItem>
                          <MobileNavigationLink to="/diary">
                            {t('diary')}
                          </MobileNavigationLink>
                        </MobileNavigationItem>
                        <MobileNavigationItem>
                          <MobileNavigationLink to="/calculator">
                            {t('calculator')}
                          </MobileNavigationLink>
                        </MobileNavigationItem>
                      </MobileNavigation>
                    </>
                  ) : (
                    <MenuIcon onClick={handleMenuBtnClick} />
                  )}
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
                      {t('diary')}
                    </HeaderLink>
                    <HeaderLink
                      to="/calculator"
                      stylehidden={styles.isHidden}
                      style={styles.link}
                    >
                      {t('calculator')}
                    </HeaderLink>
                  </div>
                  <UserInfo />
                </>
              )}
              <button onClick={changeLanguage('en')}>{t('en')}</button>
              <button onClick={changeLanguage('ua')}>{t('ua')}</button>
            </HeaderLinksWrapper>
          </HeaderNavigation>
        </Container>
      </HeaderStyled>
      {isLogged && mobileWidth && <>{/* <UserInfo /> */}</>}
    </>
  );
};

export default Header;
