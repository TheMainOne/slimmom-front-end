import { useMemo } from 'react';
import { useTemplate } from './useTemplate';

export const useTemplaitingItem = foodList => {
  const templatingTo = useTemplate();

  const templatedList = useMemo(() => {
    if (!foodList) return;

    const otherItems = [];
    const templated = [];

    Object.keys(foodList).forEach(category => {
      const itemInTemplated =
        templatingTo.all(foodList[category], category) ||
        templatingTo.some(foodList[category], category) ||
        templatingTo.almost(foodList[category], category) ||
        null;

      if (itemInTemplated) templated.push(itemInTemplated);
      if (!itemInTemplated) otherItems.push(category);
    });

    if (otherItems.length > 0) templated.push(templatingTo.other(otherItems));

    return templated;
  }, [foodList, templatingTo]);

  return templatedList;
};
