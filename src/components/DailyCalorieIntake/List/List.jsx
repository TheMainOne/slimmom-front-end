import { OlList, Items } from './List.styled';
import { Spinner } from 'components/Spinner';
import { useEffect } from 'react';
import { useGetBannedProductsMutation } from 'redux/apis/bannedProducts';

export const List = () => {
  const [getBannedProducts, { data, isLoading }] =
    useGetBannedProductsMutation();
  useEffect(() => {
    getBannedProducts({
      currentWeight: 55,
      height: 160,
      age: 25,
      desiredWeight: 50,
      bloodType: 1,
    });
  }, [getBannedProducts]);
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
