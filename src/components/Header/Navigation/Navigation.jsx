import React from 'react';
import useResizeAware from 'react-resize-aware';
import Logo from '../Logo';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import Container from 'components/Container';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import UserInfo from '../UserInfo';
import {
  HeaderStyled,
  HeaderNavigation,
  HeaderLink,
  HeaderLinksWrapper,
} from './Navigation.styled';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import {HeaderModalContent} from "./HeaderModalContent"

const styles = {
  link: {
    fontWeight: '700',
  },
  isHidden: {
    display: 'none',
  },
};

const Header = () => {
  const { pathname } = useLocation();
  const bannedPaths = ['/login', '/signup'];
  const isHidden = bannedPaths.some( ( bannedPath ) => bannedPath === pathname);

  const [resizeListener, { width }] = useResizeAware();
  const isLogged = useSelector(state => getIsLoggedIn(state));
  const mobileWidth = width <= 767;
  const tabletWidth = width >= 768 && width < 1279;
  const desktopWidth = width >= 1280;

  
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
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
                  <MenuIcon fontSize="medium" type="submit" 
                  onClick={() => openModal()}/>
                  <Modal showModal={showModal} setShowModal={setShowModal}>
                  <HeaderModalContent />
                  </Modal>
              </>
              )}
              {isLogged && tabletWidth && (
                <>
                  <UserInfo />
                  <MenuIcon fontSize="medium" type="submit" 
                  onClick={() => openModal()}/>
                  <Modal showModal={showModal} setShowModal={setShowModal}>
                  <HeaderModalContent />
                  </Modal>
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
