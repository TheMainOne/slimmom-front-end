import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding-top: 20px;
  padding-bottom: 16px;

  &:after {
    border-bottom: 2px solid #e0e0e0;
    position: absolute;
    z-index: -1;
    content: '';
    top: 10%;
    left: 0%;
    height: 0;
    width: 100vw;
  }

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-top: 80px;
    padding-bottom: 147px;

    &:after {
      display: none;
    }
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
  gap: 30px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    margin-left: 40px;
  }
`;
