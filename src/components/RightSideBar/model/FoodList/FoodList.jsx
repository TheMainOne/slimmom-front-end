import { useTemplate } from 'components/RightSideBar/hooks';
import { List } from './FoodList.styled';
import test from './test.json';

export const FoodList = ({ foodList }) => {
  const foodListTest = test.results.bannedProducts.categories; //test - delete

  const [list] = useTemplate(foodListTest); //change on  foodList
  console.log('~ list', list);

  const defaultTest = 'Your diet will be displayed here';

  return (
    <>
      <List>
        {(list.length > 0 && list.map(el => <p key={el}>{el}</p>)) ||
          defaultTest}
      </List>
    </>
  );
};
