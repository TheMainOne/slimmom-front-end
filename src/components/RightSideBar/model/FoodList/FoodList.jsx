// import { useTemplate } from 'components/RightSideBar/hooks';
import { templaitingItem } from 'components/RightSideBar/hooks';
import { useMemo } from 'react';
import { FoodItem } from './FoodItem';
import { List } from './FoodList.styled';

export const FoodList = ({ foodList }) => {
  const list = useMemo(() => templaitingItem(foodList?.categories), [foodList]);
  const defaultTest = 'Your diet will be displayed here';

  return (
    <>
      <List>
        {(list?.length > 0 && <FoodItem productList={list} />) || defaultTest}
      </List>
    </>
  );
};
