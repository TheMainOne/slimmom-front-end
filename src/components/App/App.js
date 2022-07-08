import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "styles";
import Example from "components/_EXAMPLE";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Example />
      </div>
    </ThemeProvider>
  );
};

export default App;
