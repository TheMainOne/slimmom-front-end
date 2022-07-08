import BackgroundLayout from "components/BackgroundLayout";
import Container from "components/Container";
import MainPage from "pages/MainPage";
import Example from "components/_EXAMPLE";

const Layout = () => {
  return (
    <BackgroundLayout>
      {/* Header */}
      {/* <Example /> */}

      <Container>
        <MainPage />
      </Container>
      {/* Outlet */}
    </BackgroundLayout>
  );
};

export default Layout;
