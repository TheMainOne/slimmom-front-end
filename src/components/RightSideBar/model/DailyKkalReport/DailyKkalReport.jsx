import { TableContainer, TabRows } from './Table';

export const DailyKkalReport = ({ data, isLoading }) => {
  const { left, consumed, dailyRate, percente } = data;

  return (
    <TableContainer>
      <TabRows data={[left, isLoading]} head="Left" />

      <TabRows data={[consumed, isLoading]} head="Consumed" />

      <TabRows data={[dailyRate, isLoading]} head="Daily rate" />

      <TabRows data={[percente, isLoading]} head="n% of normal" unit="%" />
    </TableContainer>
  );
};
