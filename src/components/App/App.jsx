import React, { lazy, Suspense } from 'react';
import Container from 'components/Container';
import Header from 'components/Header/Navigation/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from 'styles';
import Layout from 'pages/Layout';

const App = () => {
  return (
    // НИЧЕГО НЕ МЕНЯТЬ И НЕ ТРОГАТЬ ВООБЩЕ, РАБОТАЕМ С <Layout />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;

// const App = () => {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Suspense fallback="">
//           <Container>
//             <Routes>
//               <Route path="/" element={<Header />}>
//                 <Route path="*" element={<Navigate to="/" />} />
//               </Route>
//             </Routes>
//           </Container>
//         </Suspense>
//         <GlobalStyle />
//       </ThemeProvider>
//     </>
