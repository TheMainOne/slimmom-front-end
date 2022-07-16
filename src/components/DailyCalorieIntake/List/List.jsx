import { useEffect } from 'react';
import { Spinner } from 'components/Spinner';
import { useGetBannedProductsMutation } from 'redux/apis/bannedProducts';
import { OlList, Items, ListTitle, ListWrapper } from './List.styled';
import { useTranslation } from 'react-i18next';

export const List = ({ user }) => {
  const { t } = useTranslation();
  const [getBannedProducts, { data, isLoading }] =
    useGetBannedProductsMutation();

  useEffect(() => {
    if (!user) return;

    const { height, age, currentWeight, desiredWeight, bloodType } = user;

    getBannedProducts({
      currentWeight,
      height,
      age,
      desiredWeight,
      bloodType,
    });
  }, [getBannedProducts, user]);

  const categories =
    data && Object.keys(data?.results?.bannedProducts?.categories);

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
