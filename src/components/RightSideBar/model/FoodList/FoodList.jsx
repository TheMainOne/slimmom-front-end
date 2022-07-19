// import { useTemplate } from 'components/RightSideBar/hooks';
import { templaitingItem } from 'components/RightSideBar/hooks';
import { useMemo } from 'react';
import { Spiner } from '../Spiner/Spiner';
import { FoodItem } from './FoodItem';
import { List } from './FoodList.styled';
import { useTranslation } from 'react-i18next';

const DEFAULT_TEXT = 'Your diet will be displayed here';

export const FoodList = ({ foodList, isLoading }) => {
  const { t } = useTranslation();
  const list = useMemo(() => templaitingItem(foodList?.categories), [foodList]);
  const showInfo = list?.length > 0;
  const defaultTest = t('display');

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
