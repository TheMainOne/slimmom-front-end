import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ButtonRegistration } from 'components/Forms/LoginForm/Mui';
import LoginForm from '../../components/Forms/LoginForm';
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
import { useTranslation } from 'react-i18next';

const styles = {
  isHidden: {
    display: 'none',
  },
};

const LoginPage = () => {
  const isLogged = useSelector(state => getIsLoggedIn(state));
  const { t } = useTranslation();
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
          <Title>{t('signIn')}</Title>
          <LoginForm />
          <NavLink to="/signup">
            <ButtonRegistration
              color="primary"
              variant="outlined"
              type="button"
            >
              {t('register')}
            </ButtonRegistration>
          </NavLink>
        </BoxRelative>
        <DefaultData>
          <DefaultText>*{t('defaultLogin')}:</DefaultText>
          <DefaultLogin>
            <Span>{t('email')}:</Span> default@gmail.com
          </DefaultLogin>
          <DefaultLogin>
            <Span>{t('password')}:</Span> default1111
          </DefaultLogin>
        </DefaultData>
      </PageContainer>
    </Container>
  );
};

export default LoginPage;
