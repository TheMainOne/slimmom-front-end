import { Spiner } from 'components/RightSideBar/model/Spiner/Spiner';
import { Data, Unit } from './TabInfo.styled';

export const TabInfo = ({ data: { userData, unit }, showData }) => {
  const number = unit === 'kcal' ? String(userData).padStart(3, '0') : userData;

  return (
    <Data number={number >= 0}>
      {showData && <>{number}</>}
      {showData && <Unit>{unit}</Unit>}
      {!showData && <Spiner />}
    </Data>
  );
};
