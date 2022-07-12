import Container from 'components/Container';
import RegistrationForm from 'components/Forms/RegistrationForm';
import { LinkLogin } from 'components/Forms/RegistrationForm/MuI';
import {
  PageContainer,
  Title,
  LinkLog,
  BoxRelative,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <Container>
      <PageContainer>
        <BoxRelative>
          <Title>Register</Title>
          <RegistrationForm />
          <LinkLog to="/login">
            <LinkLogin color="primary" variant="outlined" type="button">
              Login
            </LinkLogin>
          </LinkLog>
        </BoxRelative>
      </PageContainer>
    </Container>
  );
};
export default RegistrationPage;
