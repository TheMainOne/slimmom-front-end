import { useEffect } from 'react';
import { saveUserInfo } from 'redux/slices';
import { useSelector } from 'react-redux';
import { Spinner } from 'components/Spinner';
import { useGetBannedProductsMutation } from 'redux/apis/bannedProducts';
import { OlList, Items } from './List.styled';

export const List = () => {
  const [getBannedProducts, { data, isLoading }] =
    useGetBannedProductsMutation();
  const user = useSelector(saveUserInfo);

  const { height, age, currentWeight, desiredWeight, typeBlood } =
    user.payload.userInfo.userInfo;

  useEffect(() => {
    getBannedProducts({
      currentWeight,
      height,
      age,
      desiredWeight,
      bloodType: typeBlood,
    });
  }, [age, typeBlood, currentWeight, desiredWeight, getBannedProducts, height]);

  const categories =
    data && Object.keys(data?.results?.bannedProducts?.categories);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <OlList>
          {categories &&
            categories.map(product => <Items key={product}>{product}</Items>)}
        </OlList>
      )}
    </>
  );
};
