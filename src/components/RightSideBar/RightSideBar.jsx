import { parseISO, formatISO } from 'date-fns';
import { useSelector } from 'react-redux';
import { MainContainer, TextContainer, Block } from './Container/Container';
import { DailyKkalReport } from './DailyKkalReport/DailyKkalReport';
import { FoodList } from './FoodList/FoodList';
import { Title } from './Title/Title';

export const RightSideBar = () => {
  const count = useSelector(state => state.calendar.activeDate);
  const date = format(parseISO(count), 'MM/dd/yyyy');

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
