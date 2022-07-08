import Layout from "pages/Layout";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
      <div className="App"></div>
    </ThemeProvider>
  );
};

export default App;
