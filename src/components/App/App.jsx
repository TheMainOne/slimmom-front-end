import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import Example from 'components/_EXAMPLE';
import Container from 'components/Container';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <div className="App">
          <Example />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
