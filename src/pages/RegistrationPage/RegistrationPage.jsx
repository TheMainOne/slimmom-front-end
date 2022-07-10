import Container from 'components/Container';
import RegistrationForm from 'components/Forms/RegistrationForm';
import { PageContainer, Title, LinkLogin } from './RegistrationPage.styled';

const RegistrationPage = () => {
  return (
    <Container>
      <PageContainer>
        <Title>Register</Title>
        <RegistrationForm />
        <LinkLogin to="/login">Login</LinkLogin>
      </PageContainer>
    </Container>
  );
};
export default RegistrationPage;
