import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import Layout from 'pages/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MainPage from 'pages/MainPage';
// import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const LoginPage = lazy(() => import('pages/LoginPage'))

const App = () => {
  return (
    // НИЧЕГО НЕ МЕНЯТЬ И НЕ ТРОГАТЬ ВООБЩЕ, РАБОТАЕМ С <Layout />
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route 
            path="diary" 
              element={
                  <PrivateRoute >
                    <DiaryPage />
                  </PrivateRoute>
                } />
          <Route 
            path="login" 
              element={
                  <PublicRoute redirectTo="/diary" restricted>
                    <LoginPage />
                  </PublicRoute>
                } />
          <Route path="signup" element={<RegistrationPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
