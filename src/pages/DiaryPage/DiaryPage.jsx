import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { PageContainer } from 'components/Container';
import { DiaryPageContent } from 'components/DiaryPageContent';

const DiaryPage = () => {
  return (
    <PageContainer>
      <DiaryPageContent />
      <RightSideBar />
    </PageContainer>
  );
};

export default DiaryPage;
