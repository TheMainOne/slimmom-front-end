import { LayoutStyles } from './Layout.styled';
import Header from 'components/Header/Navigation/Navigation';
import Container from 'components/Container';
import RegistrationPage from 'pages/RegistrationPage';
// import MainPage from 'pages/MainPage/MainPage';

const Layout = () => {
  return (
    <LayoutStyles>
      {/* ВНИМАНИЕ!!!!!!! Структуру не менять! Тестить свои компоненты вместо
      Example компонент, потом возвращать как было */}
      {/* Header */}
      <Container>
        <Header />
        <RegistrationPage/>
        {/* Outlet */}
      </Container>
    </LayoutStyles>
  );
};

export default Layout;
