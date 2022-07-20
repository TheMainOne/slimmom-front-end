const { useTranslation } = require('react-i18next');

export const useTranslateCategory = () => {
  const { t } = useTranslation();

  const translateCategory = item => {
    switch (item) {
      case 'яйца':
        return t('eggs');
      case 'зерновые':
        return t('crops');
      case 'мучные':
        return t('flour');
      case 'молочные':
        return t('dairy');
      case 'рыба':
        return t('fish');
      case 'мясо':
        return t('meat');
      case 'ягоды':
        return t('berries');
      case 'колбаса':
        return t('sausage');
      case 'масла и жиры':
        return t('oils');
      case 'фрукты':
        return t('fruit');
      case 'грибы':
        return t('mushrooms');
      case 'овощи и зелень':
        return t('vegetables');
      case 'орехи':
        return t('nuts');
      case 'семена':
        return t('seeds');
      case 'сухофрукты':
        return t('driedFruits');
      case 'алкогольные напитки':
        return t('alcoholic');
      case 'безалкогольные напитки':
        return t('nonAlcoholic');
      case 'мак':
        return t('poppy');
      case 'кунжут':
        return t('sesame');
      default:
        break;
    }
  };

  return { translateCategory };
};
