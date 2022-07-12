import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { ButtonRegistration } from 'components/Forms/LoginForm/Mui';
import LoginForm from '../../components/Forms/LoginForm';
// import { Spinner } from '../../components/Spinner/Spinner';
// import { selectShowLoader } from '../../redux/slices/loaderSlice';
import { PageContainer, Title, BoxRelative } from './LoginPage.styled';
import Container from 'components/Container';

const LoginPage = () => {
  // const isLoading = useSelector(selectShowLoader); // Селектор статуса загрузки

  useEffect(() => {
    document.title = 'Вход в профиль | SlimMom';
  }, []);

  return (
    <Container>
      <PageContainer>
        <BoxRelative>
          <Title>Sign In</Title>
          <LoginForm />
          <NavLink to="/signup">
            <ButtonRegistration
              color="primary"
              variant="outlined"
              type="button"
            >
              Register
            </ButtonRegistration>
          </NavLink>
        </BoxRelative>
      </PageContainer>
    </Container>
  );
};

export default LoginPage;
