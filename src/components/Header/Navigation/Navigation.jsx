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
  HeaderButtonsWrapper,
  MobileMenuButtonWrapper,
} from './Navigation.styled';

import { getIsLoggedIn } from 'redux/auth/authSelector';
import { useTranslation } from 'react-i18next';
import { Languages } from '../Languages';
import IconButton from 'components/IconButton';
import { createPortal } from 'react-dom';
import { getRefs } from 'utils';
import { useShowModal } from 'hooks/ui';
import { ReturnButtonWrapper } from '../UserInfo/UserInfo.styled';
import { IconReturnLeft } from 'components/MobileModal/MobileModal.styled';

const { mobileMenuRoot } = getRefs();

const styles = {
  link: {
    fontWeight: '700',
  },
};

const NavigationForGuest = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeaderLink to="/login" style={styles.link}>
        {t('signIn')}
      </HeaderLink>
      <HeaderLink to="/signup" style={styles.link}>
        {t('registration')}
      </HeaderLink>
    </>
  );
};

const NavigationOnMobile = ({ visibleMenu, handleMenuBtnClick }) => {
  const { t } = useTranslation();
  return (
    <>
      {visibleMenu ? (
        <>
          <MobileMenuButtonWrapper>
            <IconButton icon={<CloseIcon />} onClick={handleMenuBtnClick} />
          </MobileMenuButtonWrapper>

          {createPortal(
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
            </MobileNavigation>,
            mobileMenuRoot
          )}
        </>
      ) : (
        <MobileMenuButtonWrapper>
          <IconButton icon={<MenuIcon />} onClick={handleMenuBtnClick} />
        </MobileMenuButtonWrapper>
      )}
    </>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const [resizeListener, { width }] = useResizeAware();
  const isLogged = useSelector(getIsLoggedIn);
  const mobileWidth = width <= 767;
  const tabletWidth = width >= 768 && width < 1279;
  const desktopWidth = width >= 1280;
  const [showModal, toggleMobileModal] = useShowModal();
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
                      {t('diary')}
                    </HeaderLink>
                    <HeaderLink to="/calculator" style={styles.link}>
                      {t('calculator')}
                    </HeaderLink>
                  </div>
                  <UserInfo />
                </>
              )}
              {!isLogged && (
                <div>
                  <Languages />
                </div>
              )}
            </HeaderLinksWrapper>
            {isLogged && !mobileWidth && !tabletWidth && (
              <div>
                <Languages />
              </div>
            )}
          </HeaderNavigation>
        </Container>
      </HeaderStyled>

      {isLogged && mobileWidth && (
        <HeaderButtonsWrapper>
          <Container>
            <UserInfo />
          </Container>
        </HeaderButtonsWrapper>
      )}
      {!isLogged && mobileWidth && showModal && (
        <HeaderButtonsWrapper>
          <Container>
            <ReturnButtonWrapper>
              <IconButton
                icon={<IconReturnLeft />}
                onClick={toggleMobileModal}
              />
            </ReturnButtonWrapper>
          </Container>
        </HeaderButtonsWrapper>
      )}
    </>
  );
};

export default Header;

// position: absolute;
/* left: 60px; */
/* top: 3%; */
// top: 78px;
