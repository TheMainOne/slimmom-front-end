// import { useTemplate } from 'components/RightSideBar/hooks';
import { useTemplaitingItem } from 'components/RightSideBar/hooks';
import { useTranslation } from 'react-i18next';
import { Spiner } from '../Spiner/Spiner';
import { FoodItem } from './FoodItem';
import { List } from './FoodList.styled';

export const FoodList = ({ foodList, isLoading }) => {
  const { t } = useTranslation();

  const list = useTemplaitingItem(foodList?.categories);

  const showInfo = list?.length > 0;

  const DEFAULT_TEXT = t('display');

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
