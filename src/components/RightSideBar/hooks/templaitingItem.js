import { all, some, almost, other } from './template';

export const templaitingItem = foodList => {
  if (!foodList) return;

  const template = [];
  const otherItems = [];

  Object.keys(foodList).forEach(category => {
    const itemInTemplated =
      all(foodList[category], category) ||
      some(foodList[category], category) ||
      almost(foodList[category], category) ||
      null;

    if (itemInTemplated) template.push(itemInTemplated);
    if (!itemInTemplated) otherItems.push(category);
  });

  if (otherItems.length > 0) template.push(other(otherItems));

  return template;
};
