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

export const HeaderLinksWrapper = styled.div`
  display: flex;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    width: ${props => (props.isLogged ? '100%' : 'auto')};
    justify-content: ${props => (props.isLogged ? 'space-between' : 'initial')};
    margin-left: 30px;
    display:${props=>props.isHidden && 'none' };
  }
`;
