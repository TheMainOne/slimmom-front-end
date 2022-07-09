import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding-top: 20px;
  padding-bottom: 16px;
  ${'' /* border-bottom: 2px solid #e0e0e0; */}

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-top: 80px;
    padding-bottom: 147px;
  }

  &:after {
    border-bottom: 2px solid #e0e0e0;
    position: absolute;
    z-index: -1;
    content: '';
    top: 19%;
    left: 0%;
    height: 0;
    width: 100vw;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  color: #9b9faa;

  &.active {
    color: #212121;
  }

  &:first-of-type {
    margin-right: 16px;
  }
`;
