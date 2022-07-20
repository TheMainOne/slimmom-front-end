import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTemplate } from './useTemplate';
import { useTranslateCategory } from './useTranslateCategory';

export const useTemplaitingItem = foodList => {
  const { t } = useTranslation();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [foodList, t, otherTemplate, template, translateCategory]);

  return templatedList;
};
