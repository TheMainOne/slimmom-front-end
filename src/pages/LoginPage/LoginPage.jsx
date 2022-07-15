import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ButtonRegistration } from 'components/Forms/LoginForm/Mui';
import LoginForm from '../../components/Forms/LoginForm';
// import { Spinner } from '../../components/Spinner/Spinner';
// import { selectShowLoader } from '../../redux/slices/loaderSlice';
import {
  PageContainer,
  Title,
  BoxRelative,
  DefaultData,
  DefaultLogin,
  DefaultText,
  Span,
} from './LoginPage.styled';
import Container from 'components/Container';
import Navigation from 'components/Header/Navigation';
import { getIsLoggedIn } from 'redux/auth/authSelector';

const styles = {
  isHidden: {
    display: 'none',
  },
};

const LoginPage = () => {
  // const isLoading = useSelector(selectShowLoader); // Селектор статуса загрузки
  const isLogged = useSelector(state => getIsLoggedIn(state));

  useEffect(() => {
    document.title = 'Вход в профиль | SlimMom';
  }, []);

  return (
    <Container>
      <PageContainer>
        {isLogged && (
          <>
            <Navigation stylehidden={styles.isHidden} />
          </>
        )}
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
        <DefaultData>
          <DefaultText>*for the default login, use the data below:</DefaultText>
          <DefaultLogin>
            <Span>email:</Span> default@gmail.com
          </DefaultLogin>
          <DefaultLogin>
            <Span>password:</Span> default1111
          </DefaultLogin>
        </DefaultData>
      </PageContainer>
    </Container>
  );
};

export default LoginPage;
