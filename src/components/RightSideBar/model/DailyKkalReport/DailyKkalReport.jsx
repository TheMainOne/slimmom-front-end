import { TableContainer, TabRows } from './Table';

export const DailyKkalReport = ({ data }) => {
  const { left, consumed, dailyRate, percente } = data;

  return (
    <TableContainer>
      <TabRows data={left} head="Left" unit="kcal" />

      <TabRows data={consumed} head="Consumed" unit="kcal" />

      <TabRows data={dailyRate} head="Daily rate" unit="kcal" />

      <TabRows data={percente} head="n% of normal" unit="%" />
    </TableContainer>
  );
};
