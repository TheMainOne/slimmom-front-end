import { DailyKkalReport } from './DailyKkalReport/DailyKkalReport';
import { FoodList } from './FoodList/FoodList';

const {
  TextContainer,
  MainContainer,
  Block,
} = require('./Container/Container');
const { Title } = require('./Title/Title');

export const RightSideBar = () => {
  const date = '06/20/2020';
  const TestData = {
    left: 3000,
    consumed: 300,
    dailyRate: 3000,
    percente: '30%',
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
          <FoodList foodList={false} />
        </Block>
      </TextContainer>
    </MainContainer>
  );
};
