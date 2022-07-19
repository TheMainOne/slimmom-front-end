import { TableContainer, TabRows } from './Table';
import { useTranslation } from 'react-i18next';

export const DailyKkalReport = ({ data }) => {
  const { t } = useTranslation();

  const { left, consumed, dailyRate, percente } = data;

  return (
    <TableContainer>
      <TabRows data={left} head={t('left')} unit={t('kcal')} />

      <TabRows data={consumed} head={t('consumed')} unit={t('kcal')} />

      <TabRows data={dailyRate} head={t('rate')} unit={t('kcal')} />

      <TabRows data={percente} head={t('norm')} unit="%" />
    </TableContainer>
  );
};
