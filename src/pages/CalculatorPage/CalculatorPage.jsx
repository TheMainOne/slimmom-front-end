// import { Button } from 'components/Button';
import { PageContainer } from 'components/Container';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';

const CalculatorPage = () => {
  return (
    <PageContainer>
      <div>
        <p>
          место для
          <b>Calculate your daily calorie intake right now</b>
        </p>
      </div>
      <RightSideBar />
    </PageContainer>
  );
};

export default CalculatorPage;
