import { LayoutStyles } from './Layout.styled';
import Example from 'components/_EXAMPLE';
import Container from 'components/Container';
// import MainPage from 'pages/MainPage/MainPage';

const Layout = () => {
  return (
    <LayoutStyles>
      {/* ВНИМАНИЕ!!!!!!! Структуру не менять! Тестить свои компоненты вместо
      Example компонент, потом возвращать как было */}
      {/* Header */}
      <Container>
        <Example />
        {/* Outlet */}
      </Container>
    </LayoutStyles>
  );
};

export default Layout;
