
import RegistrationForm from "components/Forms/RegistrationForm";
import { LinkLogin } from "components/Forms/RegistrationForm/MuI";
import { PageContainer, Title } from "./RegistrationPage.styled";

const RegistrationPage = () => {
  return <PageContainer>
    <Title>Register</Title>
      <RegistrationForm />
      <LinkLogin color="primary" variant="outlined"  type="button">
           Login
        </LinkLogin>
    </PageContainer>
   
};
export default RegistrationPage;
