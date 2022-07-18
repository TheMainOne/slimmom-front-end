import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'pages/Layout';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import 'react-toastify/dist/ReactToastify.css';

const MainPage = lazy(() => import('pages/MainPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));

export const AppRouter = () => (
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
);
