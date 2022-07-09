import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/Container';
import Header from '../../components/Header';
import LoginForm from '../../components/Forms/LoginForm';
import Spinner from '../../components/Spinner';

import { getLoading } from '../../redux/auth/auth_selector';

// import styles from './LoginPage.module.css';

const LoginPage = () => {
  const isLoading = useSelector(getLoading); // Селектор статуса загрузки

  useEffect(() => {
    document.title = 'Вход в профиль | SlimMom';
  }, []);

  return (
    <>
      <Container>
        <div >
          <Header  isHidden />
          <LoginForm  />
        </div>
      </Container>

      {isLoading && <Spinner />}
    </>
  );
};

export default LoginPage;