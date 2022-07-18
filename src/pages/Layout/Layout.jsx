import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Navigation';
import BackgroundLayout from 'components/BackgroundLayout';
import { LayoutStyles } from './Layout.styled';
import { Spinner } from 'components/Spinner';

const Layout = () => {
  return (
    <LayoutStyles>
      <BackgroundLayout>
        <Header />
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </BackgroundLayout>
    </LayoutStyles>
  );
};

export default Layout;
