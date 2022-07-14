import { useSelector } from 'react-redux';
import { MainContainer, TextContainer, Block } from './model';
import { DailyKkalReport, Title, FoodList } from './model';
import { useDailyNorma } from './hooks';
import { parseISO, format } from 'date-fns';

export const RightSideBar = () => {
  const count = useSelector(state => state.calendar.activeDate);
  const date = format(parseISO(count), 'MM/dd/yyyy');
  const [responseData] = useDailyNorma('');

  // const TestData = {
  //   left: 3000,
  //   consumed: 300,
  //   dailyRate: 3000,
  //   percente: '30%',
  // };

  return (
    <MainContainer>
      <TextContainer>
        <Block>
          <Title text={`Summary for ${date}`} />
          <DailyKkalReport data={responseData.dailyData} />
        </Block>

        <Block>
          <Title text={'Food not recommended'} />
          <FoodList foodList={responseData.bannedProducts} />
        </Block>
      </TextContainer>
    </MainContainer>
  );
};
