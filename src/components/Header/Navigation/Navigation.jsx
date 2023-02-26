import React from 'react';
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
  Wrapp,
} from './Navigation.styled';

import { getIsLoggedIn } from 'redux/auth/authSelector';
import { useTranslation } from 'react-i18next';
import { Languages } from '../Languages';
import IconButton from 'components/IconButton';
import { createPortal } from 'react-dom';
import { getRefs } from 'utils';
import { useMedia, useMobileModal } from 'hooks/ui';
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
              <MobileNavigationItem>
                <Languages />
              </MobileNavigationItem>
            </MobileNavigation>,
            mobileMenuRoot
          )}
        </>
      ) : (
        <MobileMenuButtonWrapper>
          <MenuIcon onClick={handleMenuBtnClick} />
          {/* <IconButton icon={<MenuIcon />} onClick={handleMenuBtnClick} /> */}
        </MobileMenuButtonWrapper>
      )}
    </>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isDesktop } = useMedia();

  const isLogged = useSelector(getIsLoggedIn);
  const [showMobileModal, , hideMobileModal] = useMobileModal();
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenuBtnClick = () => setVisibleMenu(prev => !prev);

  return (
    <div>
      <HeaderStyled isLogged={isLogged}>
        <Container>
          <HeaderNavigation>
            <div>
              <Logo isLogged={isLogged} />
            </div>

            <HeaderLinksWrapper isLogged={isLogged}>
              {!isLogged && <NavigationForGuest />}

              {isLogged && isMobile && (
                <div>
                  <NavigationOnMobile
                    visibleMenu={visibleMenu}
                    handleMenuBtnClick={handleMenuBtnClick}
                  />
                </div>
              )}

              {isLogged && isTablet && (
                <>
                  <UserInfo />
                  <NavigationOnMobile
                    visibleMenu={visibleMenu}
                    handleMenuBtnClick={handleMenuBtnClick}
                  />
                </>
              )}

              {isLogged && isDesktop && (
                <>
                  <div>
                    <Wrapp>
                      <HeaderLink to="/diary" style={styles.link}>
                        {t('diary')}
                      </HeaderLink>
                      <HeaderLink to="/calculator" style={styles.link}>
                        {t('calculator')}
                      </HeaderLink>
                      <Languages />
                    </Wrapp>
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
          </HeaderNavigation>
        </Container>
      </HeaderStyled>

      {isLogged && isMobile && (
        <HeaderButtonsWrapper>
          <UserInfo />
        </HeaderButtonsWrapper>
      )}

      {!isLogged && isMobile && showMobileModal && (
        <HeaderButtonsWrapper>
          <Container>
            <ReturnButtonWrapper>
              <IconButton icon={<IconReturnLeft />} onClick={hideMobileModal} />
            </ReturnButtonWrapper>
          </Container>
        </HeaderButtonsWrapper>
      )}
    </div>
  );
};

export default Header;
