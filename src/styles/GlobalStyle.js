import { createGlobalStyle } from 'styled-components';

import Verdana from '../fonts/Verdana/Verdana.ttf';
import VerdanaBold from '../fonts/Verdana/Verdana-Bold.ttf';
import GothamPro from '../fonts/GothamPro/GothamPro.ttf';
import GothamProBold from '../fonts/GothamPro/GothamPro-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 400;
    src: local('Verdana'), url(${Verdana}) format('truetype');
  }

  @font-face {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    src: local('Verdana Bold'),
      url(${VerdanaBold}) format('truetype');
  }

  @font-face {
    font-family: 'Gotham Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Gotham Pro'),
      url(${GothamPro}) format('truetype');
  }

  @font-face {
    font-family: 'Gotham Pro';
    font-style: normal;
    font-weight: 700;
    src: local('Gotham Pro'),
      url(${GothamProBold}) format('truetype');
  }

 
  html {
  height: 100%;
  /* width: 100%; */
  }

  body {
    /* width: 100%; */
    min-height: 100%;
    margin: 0;
    height: 0;
    font-family: ${({ theme: { fonts } }) => fonts.verdanBold};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
    letter-spacing: 0.04em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  
  #root {
    height: 100%;
    /* width: 100%; */
  }

  h1, h2, h3, h4, h5, h6, p, ul {
  margin: 0;
  padding: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
