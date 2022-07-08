import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  /* font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
  font-family: ${({ theme: { fonts } }) => fonts.verdana};
  font-weight: 700;
   line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
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
