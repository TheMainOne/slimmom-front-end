import { TabInfo } from '../TabInfo/TabInfo';
import { Head, Row } from './TabRows.styled';

const DEFAULT_DATA = '000';

export const TabRows = ({ data, unit = 'kcal', head }) => {
  const [number = null, isLoading] = data;
  const userData = number || DEFAULT_DATA;

  return (
    <Row>
      <Head>{head}</Head>
      <TabInfo data={{ userData, unit }} showData={!isLoading} />
    </Row>
  );
};
