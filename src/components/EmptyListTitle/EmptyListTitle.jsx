import { ListEmptyTitle } from './EmptyListTitle.styled';
import { useTranslation } from 'react-i18next';

const EmptyListTitle = () => {
  const { t } = useTranslation();

  return <ListEmptyTitle>{t('empty')}</ListEmptyTitle>;
};

export default EmptyListTitle;
