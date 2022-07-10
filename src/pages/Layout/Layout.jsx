import { LayoutStyles } from './Layout.styled';
// import Header from 'components/Header/Navigation/Navigation';

import BackgroundLayout from 'components/BackgroundLayout';

const Layout = () => {
  return (
    <LayoutStyles>
      <BackgroundLayout>
        {/* ВНИМАНИЕ!!!!!!! Структуру не менять! Тестить свои компоненты вместо
      Example компонент, потом возвращать как было */}
        {/* <Header /> */}
        {/* Outlet */}
      </BackgroundLayout>
    </LayoutStyles>
  );
};

export default Layout;
