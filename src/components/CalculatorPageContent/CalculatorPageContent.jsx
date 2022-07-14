import { BlockWrapper } from 'components/Container';
import CalculatorСalorieForm from 'components/Forms/CalculatorСalorieForm';
import PageTitle from 'components/PageTitle';
import { CalculatorContainer } from './CalculatorPageContent.styled';

export const CalculatorPageContent = () => (
  <BlockWrapper>
    <PageTitle title={'Calculate your daily calorie intake right now'} />
    <CalculatorContainer>
      <CalculatorСalorieForm />
    </CalculatorContainer>
  </BlockWrapper>
);