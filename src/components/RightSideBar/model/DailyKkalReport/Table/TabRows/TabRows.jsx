import { Data, Head, Row, Unit } from './TabRows.styled';

export const TabRows = ({ data = null, unit, head }) => {
  return (
    <Row>
      <Head>{head}</Head>
      <Data number={data >= 0}>
        {data ? String(data).padStart(3, '0') : '000'}
        <Unit>{unit}</Unit>
      </Data>
    </Row>
  );
};
