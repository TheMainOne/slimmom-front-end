import { BlockWrapper } from 'components/Container';
import CalculatorŠ”alorieForm from 'components/Forms/CalculatorŠ”alorieForm';
import PageTitle from 'components/PageTitle';
import { CalculatorContainer } from './CalculatorPageContent.styled';
import { useTranslation } from 'react-i18next';

export const CalculatorPageContent = ({ getPrivatDailyNorma }) => {
  const { t } = useTranslation();

  return (
    <BlockWrapper>
      <PageTitle title={t('title')} />
      <CalculatorContainer>
        <CalculatorŠ”alorieForm getPrivatDailyNorma={getPrivatDailyNorma} />
      </CalculatorContainer>
    </BlockWrapper>
  );
};
