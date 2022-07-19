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
import IconButton from 'components/IconButton';
import { createPortal } from 'react-dom';
import { getRefs } from 'utils';
import { useMobileModal } from 'hooks/ui';
import { ReturnButtonWrapper } from '../UserInfo/UserInfo.styled';
import { IconReturnLeft } from 'components/MobileModal/MobileModal.styled';

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
        <MobileMenuButtonWrapper>
          <IconButton icon={<CloseIcon />} onClick={handleMenuBtnClick} />
        </MobileMenuButtonWrapper>

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
      <MobileMenuButtonWrapper>
        <IconButton icon={<MenuIcon />} onClick={handleMenuBtnClick} />
      </MobileMenuButtonWrapper>
    )}
  </>
);

const TABLET = 768;
const DESKTOP = 1280;

const Header = () => {
  const [resizeListener, { width }] = useResizeAware();
  const mobileWidth = width < TABLET;
  const tabletWidth = width >= TABLET && width < DESKTOP;
  const desktopWidth = width >= DESKTOP;

  const isLogged = useSelector(getIsLoggedIn);
  const [showMobileModal, , hideMobileModal] = useMobileModal();
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenuBtnClick = () => setVisibleMenu(prev => !prev);

  return (
    <div>
      {resizeListener}

      <HeaderStyled isLogged={isLogged}>
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
        <HeaderButtonsWrapper>
          <Container>
            <UserInfo />
          </Container>
        </HeaderButtonsWrapper>
      )}

      {!isLogged && mobileWidth && showMobileModal && (
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
