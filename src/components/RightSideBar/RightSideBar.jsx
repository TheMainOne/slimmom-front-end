import { MainContainer, TextContainer, Block } from './model';
import { DailyKkalReport, Title, FoodList } from './model';
import { useDailyNorma } from './hooks';
import { useTranslation } from 'react-i18next';

export const RightSideBar = ({ userData }) => {
  const [responseData, date, isLoading] = useDailyNorma(userData);
  const { t } = useTranslation();

  return (
    <MainContainer>
      <TextContainer>
        <Block>
          <Title text={`${t('summary')} ${date}`} />
          <DailyKkalReport
            data={responseData.dailyData}
            isLoading={isLoading}
          />
        </Block>

        <Block>
          <Title text={t('notRecommended')} />
          <FoodList
            foodList={responseData.bannedProducts}
            isLoading={isLoading}
          />
        </Block>
      </TextContainer>
    </MainContainer>
  );
};
