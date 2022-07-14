import { BlockWrapper } from 'components/Container';
import CalculatorСalorieForm from 'components/Forms/CalculatorСalorieForm';
import PageTitle from 'components/PageTitle';

export const CalculatorPageContent = () => (
  <BlockWrapper>
    <PageTitle title={'Calculate your daily calorie intake right now'} />
    <CalculatorСalorieForm />
  </BlockWrapper>
);
