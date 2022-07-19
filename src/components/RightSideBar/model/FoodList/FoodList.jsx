// import { useTemplate } from 'components/RightSideBar/hooks';
import { templaitingItem } from 'components/RightSideBar/hooks';
import { useMemo } from 'react';
import { Spiner } from '../Spiner/Spiner';
import { FoodItem } from './FoodItem';
import { List } from './FoodList.styled';

const DEFAULT_TEXT = 'Your diet will be displayed here';

export const FoodList = ({ foodList, isLoading }) => {
  const list = useMemo(() => templaitingItem(foodList?.categories), [foodList]);
  const showInfo = list?.length > 0;

  return (
    <>
      <List>
        {isLoading && <Spiner />}
        {showInfo && !isLoading && <FoodItem productList={list} />}
        {!showInfo && !isLoading && DEFAULT_TEXT}
      </List>
    </>
  );
};
