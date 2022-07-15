import { useEffect } from 'react';
// import { saveUserInfo } from 'redux/slices';
import { useSelector } from 'react-redux';
import { Spinner } from 'components/Spinner';
import { useGetBannedProductsMutation } from 'redux/apis/bannedProducts';
import { OlList, Items, ListTitle, ListWrapper } from './List.styled';
import { useTranslation } from 'react-i18next';
import { getUserParams } from 'redux/slices/selector';

export const List = () => {
  const { t } = useTranslation();

  const [getBannedProducts, { data, isLoading }] =
    useGetBannedProductsMutation();
  // const user = useSelector(getUserParams);

  // const { height, age, currentWeight, desiredWeight, bloodType } = user;

  // useEffect(() => {
  //   getBannedProducts({
  //     currentWeight,
  //     height,
  //     age,
  //     desiredWeight,
  //     bloodType,
  //   });
  // }, [age, bloodType, currentWeight, desiredWeight, getBannedProducts, height]);

  const categories =
    data && Object.keys(data?.results?.bannedProducts?.categories);

  // console.log(categories);
  return (
    <ListWrapper>
      {categories && <ListTitle>{t('bannedFood')}</ListTitle>}
      {isLoading ? (
        <Spinner />
      ) : (
        <OlList>
          {categories &&
            categories.map(product => <Items key={product}>{product}</Items>)}
        </OlList>
      )}
    </ListWrapper>
  );
};
