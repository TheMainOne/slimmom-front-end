import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/Container';
import Header from '../../components/Header';
import LoginForm from '../../components/Forms/LoginForm';
import Loader from '../../components/Loader';

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
        <div className={styles.loginPage}>
          <Header className={styles.loginPage__header} isHidden />
          <LoginForm className={styles.loginPage__form} />
        </div>
      </Container>

      {isLoading && <Loader />}
    </>
  );
};

export default LoginPage;