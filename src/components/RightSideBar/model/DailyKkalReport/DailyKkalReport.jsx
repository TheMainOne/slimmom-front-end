import { TabData, TabHead, Table, TabRows } from './DailyKkalReport.styled';

export const DailyKkalReport = ({ data }) => {
  return (
    <Table>
      <tbody>
        <TabRows>
          <TabHead>Left</TabHead>
          <TabData>000 kcal</TabData>
        </TabRows>

        <TabRows>
          <TabHead>Consumed</TabHead>
          <TabData>000 kcal</TabData>
        </TabRows>

        <TabRows>
          <TabHead>Daily rate</TabHead>
          <TabData>{data.dailyRate || '000'} kcal</TabData>
        </TabRows>

        <TabRows>
          <TabHead>n% of normal</TabHead>
          <TabData>000 kcal</TabData>
        </TabRows>
      </tbody>
    </Table>
  );
};
