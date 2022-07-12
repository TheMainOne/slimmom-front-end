import { List } from './FoodList.styled';

export const FoodList = ({ foodList }) => {
  const defaultTest = 'Your diet will be displayed here';

  const obj = {};

  const list = foodList.map(food => {
    if (!obj[food.categories]) obj[food.categories] = 0;

    obj[food.categories] += 1;

    return food.categories;
  });

  console.log('~ obj', obj);

  return (
    <>
      <List>{defaultTest}</List>
    </>
  );
};
