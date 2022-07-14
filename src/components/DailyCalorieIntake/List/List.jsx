import { useEffect } from 'react';
import { saveUserInfo } from 'redux/slices';
import { useSelector } from 'react-redux';
import { Spinner } from 'components/Spinner';
import { useGetBannedProductsMutation } from 'redux/apis/bannedProducts';
import { OlList, Items, ListTitle, ListWrapper } from './List.styled';

export const List = () => {
  const [getBannedProducts, { data, isLoading }] =
    useGetBannedProductsMutation();
  const user = useSelector(saveUserInfo);

  const { height, age, currentWeight, desiredWeight, bloodType } =
    user.payload.userInfo.userInfo;

  useEffect(() => {
    getBannedProducts({
      currentWeight,
      height,
      age,
      desiredWeight,
      bloodType,
    });
  }, [age, bloodType, currentWeight, desiredWeight, getBannedProducts, height]);

  const categories =
    data && Object.keys(data?.results?.bannedProducts?.categories);

  console.log(categories);
  return (
    <ListWrapper>
      {categories && <ListTitle>Foods you should not eat</ListTitle>}
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
