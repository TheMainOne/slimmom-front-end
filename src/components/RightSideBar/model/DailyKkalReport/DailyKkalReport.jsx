import { TableContainer, TabRows } from './Table';
import { useTranslation } from 'react-i18next';

export const DailyKkalReport = ({ data, isLoading }) => {
  const { left, consumed, dailyRate, percente } = data;
  const { t } = useTranslation();

  return (
    <TableContainer>
      <TabRows data={[left, isLoading]} head={t('left')} />

      <TabRows data={[consumed, isLoading]} head={t('consumed')} />

      <TabRows data={[dailyRate, isLoading]} head={t('rate')} />

      <TabRows data={[percente, isLoading]} head={t('norm')} unit="%" />
    </TableContainer>
  );
};
