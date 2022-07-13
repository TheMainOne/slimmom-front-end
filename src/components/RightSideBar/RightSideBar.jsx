import { MainContainer, TextContainer, Block } from './model';
import { DailyKkalReport, Title, FoodList } from './model';
import { useDailyNorma, useSelectedData } from './hooks';
import { usePrivatDailyNormaQuery } from 'redux/apis/privatDailyNorma';

export const RightSideBar = () => {
  const [date] = useSelectedData('');
  const [dailyRate, bannedProducts] = useDailyNorma('');

  const { data = [] } = usePrivatDailyNormaQuery();
  console.log('~ data', data);

  const TestData = {
    left: null,
    consumed: null,
    dailyRate,
    percente: null,
  };

  return (
    <MainContainer>
      <TextContainer>
        <Block>
          <Title text={`Summary for ${date}`} />
          <DailyKkalReport data={TestData} />
        </Block>

        <Block>
          <Title text={'Food not recommended'} />
          <FoodList foodList={bannedProducts} />
        </Block>
      </TextContainer>
    </MainContainer>
  );
};
