// import { Button } from 'components/Button';
import { CalculatorPageContent } from 'components/CalculatorPageContent';
import { PageContainer } from 'components/Container';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

const CalculatorPage = () => {
  return (
    <PageContainer>
      <CalculatorPageContent />
      <RightSideBar />
    </PageContainer>
  );
};

export default CalculatorPage;
