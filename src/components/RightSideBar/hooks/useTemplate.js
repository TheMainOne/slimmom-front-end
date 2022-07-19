import { useTranslation } from 'react-i18next';
import { transformFirstLetter } from './transformFirstLetter';

export const useTemplate = () => {
  const { t } = useTranslation();

  return {
    all: ({ total, totalInBase }, category) =>
      total === totalInBase ? `${t('allProduct')} ${category}.` : null,

    almost: ({ total, totalInBase }, category) =>
      total > totalInBase / 2 ? `${t('almostProduct')} ${category}.` : null,

    some: ({ total, products = [] }, category) => {
      const listOfProducts = products?.map(pr => pr.title.ua).join(', ');
      return total <= 4
        ? `${t('someProduct')} ${category} (${listOfProducts}).`
        : null;
    },

    other: otherItem => {
      return transformFirstLetter(otherItem).join(', ');
    },
  };
};
