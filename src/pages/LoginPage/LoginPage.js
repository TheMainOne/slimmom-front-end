// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

// import Header from '../../components/Header';
import LoginForm from '../../components/Forms/LoginForm';
// import Spinner from '../../components/Spinner';

// import { selectShowLoader } from '../../redux/slices/loaderSlice';
import { MainContainer, Title } from "./LoginPage.styled";
// import styles from './LoginPage.module.css';

const LoginPage = () => {
  // const isLoading = useSelector(selectShowLoader); // Селектор статуса загрузки

  // useEffect(() => {
  //   document.title = 'Вход в профиль | SlimMom';
  // }, []);

  return (
    <>
      <MainContainer>
      <Title>Sign In</Title>
          {/* <Header /> */}
          <LoginForm />
        
      </MainContainer>

      {/* {isLoading && <Spinner />} */}
    </>
  );
};

export default LoginPage;