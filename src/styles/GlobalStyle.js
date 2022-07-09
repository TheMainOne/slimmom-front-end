import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 400;
    src: local('Verdana'), url('../fonts/Verdana/Verdana.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Verdana';
    font-style: normal;
    font-weight: 700;
    src: local('Verdana'),
      url('../fonts/Verdana/Verdana-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Gotham Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Gotham Pro'),
      url('../fonts/GothamPro/GothamPro.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Gotham Pro';
    font-style: normal;
    font-weight: 700;
    src: local('Gotham Pro'),
      url('../fonts/GothamPro/GothamPro-Bold.ttf') format('truetype');
  }

  body {
    margin: 0;
    /* font-family: 'Verdana'; */
    font-weight: 700;
    /* line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana}; */
    letter-spacing: 0.04em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

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
