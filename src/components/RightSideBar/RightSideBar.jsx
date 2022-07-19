import { MainContainer, TextContainer, Block } from './model';
import { DailyKkalReport, Title, FoodList } from './model';
import { useDailyNorma } from './hooks';

export const RightSideBar = ({ userData }) => {
  const [responseData, date, isLoading] = useDailyNorma(userData);

  return (
    <MainContainer>
      <TextContainer>
        <Block>
          <Title text={`Summary for ${date}`} />
          <DailyKkalReport
            data={responseData.dailyData}
            isLoading={isLoading}
          />
        </Block>

        <Block>
          <Title text={'Food not recommended'} />
          <FoodList
            foodList={responseData.bannedProducts}
            isLoading={isLoading}
          />
        </Block>
      </TextContainer>
    </MainContainer>
  );
};
