import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme, GlobalStyle } from 'styles';
import { muiTheme } from 'styles';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { authOperations } from 'redux/auth';
import { useSetDocumentTitle } from 'hooks/ui';
import { AppRouter } from './AppRouter';

const App = () => {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelector.getFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useSetDocumentTitle();

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <AppRouter />
      </MuiThemeProvider>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
