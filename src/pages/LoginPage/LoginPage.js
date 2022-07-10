// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { LinkRegistration } from 'components/Forms/LoginForm/Mui';
// import Header from '../../components/Header';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
// import Spinner from '../../components/Spinner/Spinner';

// import { selectShowLoader } from '../../redux/slices/loaderSlice';
import { Container, Title } from "./LoginPage.styled";


const LoginPage = () => {
  // const isLoading = useSelector(selectShowLoader); // Селектор статуса загрузки

  // useEffect(() => {
  //   document.title = 'Вход в профиль | SlimMom';
  // }, []);

  return (
    <>
      <Container>
      <Title>Sign In</Title>
      
          <LoginForm />

      </Container>

      {/* {isLoading && <Spinner />} */}
    </>
  );
};

export default LoginPage;