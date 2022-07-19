// import { useTemplate } from 'components/RightSideBar/hooks';
import { templaitingItem } from 'components/RightSideBar/hooks';
import { useMemo } from 'react';
import { FoodItem } from './FoodItem';
import { List } from './FoodList.styled';
import { useTranslation } from 'react-i18next';

export const FoodList = ({ foodList }) => {
  const { t } = useTranslation();

  const list = useMemo(() => templaitingItem(foodList?.categories), [foodList]);
  const defaultTest = t('display');

  return (
    <>
      <List>
        {(list?.length > 0 && <FoodItem productList={list} />) || defaultTest}
      </List>
    </>
  );
};
