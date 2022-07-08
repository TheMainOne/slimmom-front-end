import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
  width: 100%;
  height: 100%;
  }
  body {
  margin: 0;
  font-family: ${({ theme: { fonts } }) => fonts.verdana};
  font-weight: 400;
  width: 100%;
  height: 100%;
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
