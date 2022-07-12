import { List } from './FoodList.styled';

export const FoodList = ({ foodList }) => {
  const defaultTest = 'Your diet will be displayed here';
  const list = foodList.map(food => {
    console.log('~ food', food.title.ua);

    return food.title.ua;
  });
  console.log('~ list', list);
  // .join(', ');

  return (
    <>
      <List>{list || defaultTest}</List>
    </>
  );
};
