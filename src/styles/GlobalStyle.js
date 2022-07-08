import { createGlobalStyle } from 'styled-components';
import Verdana from '../fonts/Verdana/Verdana.ttf';
import VerdanaBold from '../fonts/Verdana/Verdana-Bold.ttf';
import GothamPro from '../fonts/GothamPro/GothamPro.ttf';
import GothamProBold from '../fonts/GothamPro/GothamPro-Bold.ttf';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Verdana';
  src: url(${Verdana}) format('ttf'),
  src: url(${VerdanaBold}) format('ttf'),
}

@font-face {
  font-family: 'Gotham Pro';
  src: url(${GothamPro}) format('ttf'),
  src: url(${GothamProBold}) format('ttf'),
}

  body {
  margin: 0;
  font-family: 'Verdana';
  font-weight: 700;
   line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
  letter-spacing: 0.04em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

#root {
  height: 100%;
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
