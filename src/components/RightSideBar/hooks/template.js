import { transformFirstLetter } from './transformFirstLetter';

export const all = ({ total, totalInBase }, category) =>
  total === totalInBase ? `Все продукти из групы: ${category}.` : null;

export const almost = ({ total, totalInBase }, category) =>
  total > totalInBase / 2
    ? `Большенство продуктов из групы: ${category}.`
    : null;

export const some = ({ total, products = [] }, category) => {
  const listOfProducts = products?.map(pr => pr.title.ru).join(', ');
  return total <= 4
    ? `Некоторые продукты из групы: ${category} (${listOfProducts}).`
    : null;
};

export const other = otherItem => {
  return transformFirstLetter(otherItem).join(', ');
};

export const template = { all, almost, some, other };
