import { OlList, Items, ListTitle, ListWrapper } from './List.styled';
import { useTranslation } from 'react-i18next';
import { useTranslateCategory } from '../../RightSideBar/hooks/useTranslateCategory';
export const List = ({ data }) => {
  const { t } = useTranslation();
  const { translateCategory } = useTranslateCategory();

  const categories =
    data && Object.keys(data?.results?.bannedProducts?.categories);

  return (
    <ListWrapper>
      {categories && <ListTitle>{t('bannedFood')}</ListTitle>}

      <OlList>
        {categories &&
          categories?.map((category, index) => (
            <Items key={index}>{translateCategory(category)}</Items>
          ))}
      </OlList>
    </ListWrapper>
  );
};
