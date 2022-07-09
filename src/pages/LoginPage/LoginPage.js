import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Container from '../../components/Container';
import Header from '../../components/Header';
import LoginForm from '../../components/Forms/LoginForm';
import Spinner from '../../components/Spinner';

import { selectShowLoader } from '../../redux/slices/loaderSlice';

// import styles from './LoginPage.module.css';

const LoginPage = () => {
  const isLoading = useSelector(selectShowLoader); // Селектор статуса загрузки

  useEffect(() => {
    document.title = 'Вход в профиль | SlimMom';
  }, []);

  return (
    <>
      <Container>
        <div >
          <Header />
          <LoginForm  />
        </div>
      </Container>

      {isLoading && <Spinner />}
    </>
  );
};

export default LoginPage;