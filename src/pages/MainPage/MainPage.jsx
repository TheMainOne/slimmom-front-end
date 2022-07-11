import PageTitle from 'components/PageTitle';
import { PageContainer } from './MainPage.styled';
import Container from 'components/Container';

const MainPage = () => {
  return (
    <Container>
      <PageContainer>
        <PageTitle title={'Calculate your daily calorie intake right now'} />
      </PageContainer>
    </Container>
  );
};

export default MainPage;
