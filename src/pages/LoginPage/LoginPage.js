import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { LinkRegistration } from 'components/Forms/LoginForm/Mui';
// import Header from '../../components/Header';
import { LinkRegistration } from "components/Forms/LoginForm/Mui";
import LoginForm from '../../components/Forms/LoginForm';
// import { Spinner } from '../../components/Spinner/Spinner';

// import { selectShowLoader } from '../../redux/slices/loaderSlice';
import { PageContainer, Title } from "./LoginPage.styled";


const LoginPage = () => {
  // const isLoading = useSelector(selectShowLoader); // Селектор статуса загрузки

  useEffect(() => {
    document.title = 'Вход в профиль | SlimMom';
  }, []);

  return (
    <>
      <PageContainer>
        <Title>Sign In</Title>
       <LoginForm />
       <NavLink to="/signup">
        <LinkRegistration 
          color="primary" 
          variant="outlined"  
          type="button">
           Register
        </LinkRegistration>
       </NavLink>
        
        
      </PageContainer>
        
        {/* {isLoading && <Spinner />} */}
     
       </>
  );
};

export default LoginPage;