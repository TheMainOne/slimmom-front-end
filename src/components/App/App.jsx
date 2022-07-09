import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import Layout from 'pages/Layout';

const App = () => {
  return (
    // НИЧЕГО НЕ МЕНЯТЬ И НЕ ТРОГАТЬ ВООБЩЕ, РАБОТАЕМ С <Layout />
    <ThemeProvider theme={theme}>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
