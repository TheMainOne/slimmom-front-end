import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import Example from 'components/_EXAMPLE';
import Container from 'components/Container';
import RegistrationPage from 'pages/RegistrationPage';
import { SpinnerExample } from 'components/Spinner';
import DiaryPage from 'pages/DiaryPage';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <div className="App">
          <Example />
          <RegistrationPage/>
          <SpinnerExample />
        </div>

        <DiaryPage />
      </Container>
    </ThemeProvider>
  );
};

export default App;
