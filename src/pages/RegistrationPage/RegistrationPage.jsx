import { Button } from 'components/Button';
import Container from 'components/Container';
import RegistrationForm from 'components/Forms/RegistrationForm';

import {
  PageContainer,
  Title,
  LinkLog,
  BoxRelative,
  BoxButton,
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
          <BoxButton>
            <LinkLog to="/login">
              <Button variant="outlined" text={t('logIn')} />
            </LinkLog>
          </BoxButton>
        </BoxRelative>
      </PageContainer>
    </Container>
  );
};
export default RegistrationPage;
