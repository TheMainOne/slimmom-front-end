import { Button } from 'components/Button';
import Container from 'components/Container';
import RegistrationForm from 'components/Forms/RegistrationForm';
// import { LinkLogin } from 'components/Forms/RegistrationForm/MuI';
import {
  PageContainer,
  Title,
  LinkLog,
  BoxRelative,
  BoxButton,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <Container>
      <PageContainer>
        <BoxRelative>
          <Title>Register</Title>
          <RegistrationForm />
          <BoxButton>
            <LinkLog to="/login">
              <Button variant="outlined" text="Login" />
            </LinkLog>
          </BoxButton>
        </BoxRelative>
      </PageContainer>
    </Container>
  );
};
export default RegistrationPage;
