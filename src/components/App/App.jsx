import React, { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme, GlobalStyle } from 'styles';
import { muiTheme } from 'styles';
import { useDispatch, useSelector } from 'react-redux';
import Layout from 'pages/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import MainPage from 'pages/MainPage';
// import RegistrationPage from 'pages/RegistrationPage';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { authOperations, authSelector } from 'redux/auth';
import { Spinner } from 'components/Spinner';

const MainPage = lazy(() => import('pages/MainPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage')); 
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelector.getFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <>
      {isFetchingCurrentUser ? (
        <Spinner />
      ) : (
        <>
       <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <MainPage />
                </PublicRoute>
              }
            />
            <Route
              path="diary"
              element={
                <PrivateRoute>
                  <DiaryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="calculator"
              element={
                <PrivateRoute>
                  <CalculatorPage />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="signup"
              element={
                <PublicRoute redirectTo="/diary" restricted>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
                </>
        )}
        </>
      </MuiThemeProvider>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
