import { useTranslation } from 'react-i18next';
import { transformFirstLetter } from './transformFirstLetter';
import { useTranslateCategory } from './useTranslateCategory';

export const useTemplate = () => {
  const { t } = useTranslation();

  const template = ({ total, totalInBase, products }, category) => {
    const allItems = total === totalInBase;
    const almostItems = total > totalInBase / 2;
    const someItems = total <= 4;
    const other = !allItems && !almostItems && !someItems;

    if (allItems) return `${t('allProduct')} ${category}.`;

    if (almostItems) return `${t('almostProduct')} ${category}.`;

    if (someItems) {
      const listOfProducts = products?.map(pr => pr.title.ua).join(', ');
      return `${t('someProduct')} ${category} (${listOfProducts}).`;
    }

    if (other) return null;
  };

  const otherTemplate = otherItem => {
    return transformFirstLetter(otherItem).join(', ');
  };

  return {
    otherTemplate,
    template,
  };
};
