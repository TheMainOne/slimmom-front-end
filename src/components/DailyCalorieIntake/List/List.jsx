import { OlList, Items, ListTitle, ListWrapper } from './List.styled';
import { useTranslation } from 'react-i18next';
import { useTemplaitingItem } from '../../RightSideBar/hooks/useTemplaitingItem';

export const List = ({ data }) => {
  const { t } = useTranslation();
  const categories = useTemplaitingItem(
    data?.results?.bannedProducts?.categories
  );

  const engLanguage = localStorage.getItem('i18nextLng') === 'en';
  localStorage.getItem('i18nextLtn');
  return (
    <ListWrapper>
      {categories && <ListTitle>{t('bannedFood')}</ListTitle>}

      <OlList>
        {categories &&
          categories?.map((product, index) => (
            <Items key={index}>
              {engLanguage ? product.slice(4) : product.slice(26)}
            </Items>
          ))}
      </OlList>
    </ListWrapper>
  );
};
