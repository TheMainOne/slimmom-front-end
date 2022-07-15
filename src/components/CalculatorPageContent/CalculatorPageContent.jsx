import { BlockWrapper } from 'components/Container';
import CalculatorСalorieForm from 'components/Forms/CalculatorСalorieForm';
import PageTitle from 'components/PageTitle';
import { CalculatorContainer } from './CalculatorPageContent.styled';

export const CalculatorPageContent = ({ getPrivatDailyNorma }) => (
  <BlockWrapper>
    <PageTitle title={'Calculate your daily calorie intake right now'} />
    <CalculatorContainer>
      <CalculatorСalorieForm getPrivatDailyNorma={getPrivatDailyNorma} />
    </CalculatorContainer>
  </BlockWrapper>
);
