// import { Button } from 'components/Button';
import { PageContainer } from 'components/Container';
import CalculatorСalorieForm from 'components/Forms/CalculatorСalorieForm';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
// import { FormContainer } from 'pages/MainPage/MainPage.styled';

const CalculatorPage = () => {
  return (
    <PageContainer>
      <div>
        <p>
          место для
          <b>Calculate your daily calorie intake right now</b>
        </p>
        {/* <FormContainer> */}
        <CalculatorСalorieForm />
        {/* </FormContainer> */}
      </div>
      <RightSideBar />
    </PageContainer>
  );
};

export default CalculatorPage;
