import { Spiner } from 'components/RightSideBar/model/Spiner/Spiner';
import { useTranslation } from 'react-i18next';
import { Data, Unit } from './TabInfo.styled';

export const TabInfo = ({ data: { userData, unit }, showData }) => {
  const { t } = useTranslation();
  const number = unit === 'kcal' ? String(userData).padStart(3, '0') : userData;

  return (
    <Data number={number >= 0}>
      {showData && <>{number}</>}
      {showData && <Unit>{unit === 'kcal' ? t('kcal') : '%'}</Unit>}
      {!showData && <Spiner />}
    </Data>
  );
};
