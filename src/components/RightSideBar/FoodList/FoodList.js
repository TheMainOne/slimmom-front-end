import { List } from './FoodList.styled';

export const FoodList = ({ foodList }) => {
  const defaultTest = 'Your diet will be displayed here';

  return (
    <>
      <List>{foodList || defaultTest}</List>
    </>
  );
};
