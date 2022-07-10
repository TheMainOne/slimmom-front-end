import { LayoutStyles } from './Layout.styled';
// import Header from 'components/Header/Navigation/Navigation';

import BackgroundLayout from 'components/BackgroundLayout';
import { Outlet } from 'react-router-dom';

// import MainPage from 'pages/MainPage/MainPage';

const Layout = () => {
  return (
    <LayoutStyles>
      <BackgroundLayout>
        {/* ВНИМАНИЕ!!!!!!! Структуру не менять! Тестить свои компоненты вместо
      Example компонент, потом возвращать как было */}
        <Outlet />
      </BackgroundLayout>
    </LayoutStyles>
  );
};

export default Layout;
