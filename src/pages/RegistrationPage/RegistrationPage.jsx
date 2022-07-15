import Container from 'components/Container';
import RegistrationForm from 'components/Forms/RegistrationForm';
import { LinkLogin } from 'components/Forms/RegistrationForm/MuI';
import {
  PageContainer,
  Title,
  LinkLog,
  BoxRelative,
} from './RegistrationPage.styled';
import { useTranslation } from 'react-i18next';

const RegistrationPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <PageContainer>
        <BoxRelative>
          <Title>{t('register')}</Title>
          <RegistrationForm />
          <LinkLog to="/login">
            <LinkLogin color="primary" variant="outlined" type="button">
              {t('logIn')}
            </LinkLogin>
          </LinkLog>
        </BoxRelative>
      </PageContainer>
    </Container>
  );
};
export default RegistrationPage;
