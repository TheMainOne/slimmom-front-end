import { LayoutStyles } from './Layout.styled';
import { Outlet } from 'react-router-dom';
// import MainPage from 'pages/MainPage/MainPage';

const Layout = () => {
  return (
    <LayoutStyles>
      {/* ВНИМАНИЕ!!!!!!! Структуру не менять! Тестить свои компоненты вместо
      Example компонент, потом возвращать как было */}
      <Outlet />
    </LayoutStyles>
  );
};

export default Layout;
