import { useMemo } from 'react';
import { useTemplate } from './useTemplate';
import { useTranslateCategory } from './useTranslateCategory';

export const useTemplaitingItem = foodList => {
  const { translateCategory } = useTranslateCategory();
  const { template, otherTemplate } = useTemplate();

  const templatedList = useMemo(() => {
    if (!foodList) return;

    const otherItems = [];
    const templated = [];

    Object.keys(foodList).forEach(category => {
      const nameCategory = translateCategory(category);
      const templatingItem = template(foodList[category], nameCategory);

      if (templatingItem) templated.push(templatingItem);
      if (!templatingItem) otherItems.push(nameCategory);
    });

    if (otherItems.length > 0) templated.push(otherTemplate(otherItems));

    return templated;
  }, [foodList, otherTemplate, template, translateCategory]);

  return templatedList;
};
