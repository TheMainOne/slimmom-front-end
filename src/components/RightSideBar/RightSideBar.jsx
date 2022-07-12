import { MainContainer, TextContainer, Block } from './model';
import { DailyKkalReport, Title, FoodList } from './model';
import { useDailyNorma, useSelectedData } from './hooks';

export const RightSideBar = () => {
  const [date] = useSelectedData('');
  const [isLoading, dailyRate, bannedProducts] = useDailyNorma('');
  console.log('~ isLoading', isLoading);

  // делаем запрос
  // сохраняем в редакс userDailyNorma
  // на этой странице запускаем хук и возвращаем обьекты , которые будем передавать в компонент

  const TestData = {
    left: 3000,
    consumed: 300,
    dailyRate,
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
          <FoodList foodList={bannedProducts} />
        </Block>
      </TextContainer>
    </MainContainer>
  );
};
