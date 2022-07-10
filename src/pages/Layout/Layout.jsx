import { LayoutStyles } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container';
// import MainPage from 'pages/MainPage/MainPage';

const Layout = () => {
  return (
    <LayoutStyles>
      {/* ВНИМАНИЕ!!!!!!! Структуру не менять! Тестить свои компоненты вместо
      Example компонент, потом возвращать как было */}

      <Container>
        <Outlet />
      </Container>
    </LayoutStyles>
  );
};

export default Layout;
