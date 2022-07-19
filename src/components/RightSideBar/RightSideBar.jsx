import { MainContainer, TextContainer, Block } from './model';
import { DailyKkalReport, Title, FoodList } from './model';
import { useDailyNorma } from './hooks';
import { useTranslation } from 'react-i18next';

export const RightSideBar = ({ userData }) => {
  const [responseData, date, isLoading] = useDailyNorma(userData);
  const { t } = useTranslation();
  const summ = t('summary');

  return (
    <MainContainer>
      <TextContainer>
        <Block>
          <Title text={`${summ} ${date}`} />
          <DailyKkalReport
            data={responseData.dailyData}
            isLoading={isLoading}
          />
        </Block>

        <Block>
          <Title text={t('Food not recommended')} />
          <FoodList
            foodList={responseData.bannedProducts}
            isLoading={isLoading}
          />
        </Block>
      </TextContainer>
    </MainContainer>
  );
};
