import styled from "styled-components";
import bgDesktopImage from "assets/images/bg-desktop.svg";
import bgTabletImage from "assets/images/bg-tablet.svg";

//это временно
export const LayoutStyles = styled.div`
  background-image: none;
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    height: 100%;
    background-image: url(${bgTabletImage});
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    height: 100%;
    background-image: url(${bgDesktopImage});
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
