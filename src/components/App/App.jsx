import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import Layout from 'pages/Layout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const DiaryPage = lazy(() => import('pages/DiaryPage'));

const App = () => {
  return (
    // НИЧЕГО НЕ МЕНЯТЬ И НЕ ТРОГАТЬ ВООБЩЕ, РАБОТАЕМ С <Layout />
    <ThemeProvider theme={theme}>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="diary" element={<DiaryPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
