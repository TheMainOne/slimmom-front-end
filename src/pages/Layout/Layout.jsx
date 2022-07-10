import { LayoutStyles } from './Layout.styled';
import Header from 'components/Header/Navigation/Navigation';
import Container from 'components/Container';
import LoginPage from 'pages/LoginPage';
// import MainPage from 'pages/MainPage/MainPage';

const Layout = () => {
  return (
    <LayoutStyles>
      {/* ВНИМАНИЕ!!!!!!! Структуру не менять! Тестить свои компоненты вместо
      Example компонент, потом возвращать как было */}
      {/* Header */}
      <Container>
        <Header />
        <LoginPage />
        {/* Outlet */}
      </Container>
    </LayoutStyles>
  );
};

export default Layout;
