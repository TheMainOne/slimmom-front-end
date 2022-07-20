import { OlList, Items, ListTitle, ListWrapper } from './List.styled';
import { useTranslation } from 'react-i18next';

export const List = ({ user, data, isLoading }) => {
  const { t } = useTranslation();

  const categories =
    data && Object.keys(data?.results?.bannedProducts?.categories);

  return (
    <ListWrapper>
      {categories && <ListTitle>{t('bannedFood')}</ListTitle>}

      <OlList>
        {categories &&
          categories.map(product => <Items key={product}>{product}</Items>)}
      </OlList>
    </ListWrapper>
  );
};
