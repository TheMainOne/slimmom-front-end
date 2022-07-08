import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  padding-top: 20px;
  padding-bottom: 16px;

  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    padding-top: 80px;
    padding-bottom: 147px;
  }
`;

export const HeaderLink = styled(NavLink)`
  &.active {
    color: tomato;
  }
`;
