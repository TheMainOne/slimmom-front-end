import { Data, Head, Row, Unit } from './TabRows.styled';

export const TabRows = ({ data, unit, head }) => {
  return (
    <Row>
      <Head>{head}</Head>
      <Data>
        {data ? String(data).padStart(3, '0') : '000'}
        <Unit>{unit}</Unit>
      </Data>
    </Row>
  );
};
