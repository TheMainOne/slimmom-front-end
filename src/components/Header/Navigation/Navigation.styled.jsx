import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding-top: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e0e0;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-top: 80px;
    border-bottom: none;
    padding-bottom: 0px;

    width: ${props => (props.isLogged ? '100%' : 'auto')};
    position: ${props => (props.isLogged ? 'absolute' : 'initial')};
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    justify-content: flex-start;
    align-items: end;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: #9b9faa;
  font-family: 'Gotham Pro';
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  &.active {
    color: #212121;
  }

  &:first-of-type {
    margin-right: 16px;
  }
`;

export const MobileNavigation = styled.ul`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100vh;
  top: 82px;
  left: 0;
  right: 0;
  padding: 60px 15px;
  background-color: #264061;
  text-align: center;
`;
export const MobileNavigationItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
export const MobileNavigationLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Verdana', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #9b9faa;

  &.active {
    color: #fff;
  }
`;
export const HeaderLinksWrapper = styled.div`
  display: flex;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    align-items: center;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    width: ${props => (props.isLogged ? '100%' : 'auto')};
    justify-content: ${props => (props.isLogged ? 'space-between' : 'initial')};
    align-items: inherit;
    margin-left: 30px;
  }
`;

export const HeaderButtonsWrapper = styled.div`
  background-color: #eff1f3;
`;

export const MobileMenuButtonWrapper = styled.div`
  display: flex;
  & button {
    color: #212121;
    :active {
      background-color: #e76000;
    }
  }
`;

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
