
import RegistrationForm from "components/Forms/RegistrationForm";
import { LinkLogin } from "components/Forms/RegistrationForm/MuI";
import { MainContainer, Title } from "./RegistrationPage.styled";

const RegistrationPage = () => {
  return <>
     <MainContainer>
    <Title>Register</Title>
   
      <RegistrationForm />
      <LinkLogin color="primary" variant="outlined"  type="button">
           Login
        </LinkLogin>
    </MainContainer>
    </>
};
export default RegistrationPage;
