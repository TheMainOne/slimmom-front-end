import styled from 'styled-components';
import bgDesktopImage from 'images/background/bg-desktop.svg';
import bgTabletImage from 'images/background/bg-tablet.svg';

//это временно
export const LayoutStyles = styled.div`
  height: 100%;
  /* background-image: none; */
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.tablet}) {
    height: 100%;
    /* background-image: url(${bgTabletImage});
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat; */
  }
  @media (min-width: ${({ theme: { breakpoints } }) => breakpoints.desktop}) {
    height: 100%;
    /* background-image: url(${bgDesktopImage});
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat; */
  }
`;
