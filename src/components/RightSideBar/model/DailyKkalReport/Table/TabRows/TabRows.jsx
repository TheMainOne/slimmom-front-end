import { Spiner } from 'components/RightSideBar/model/Spiner/Spiner';
import { Data, Head, Row, Unit } from './TabRows.styled';

export const TabRows = ({ data = null, unit = 'kcal', head }) => {
  const [number, isLoading] = data;
  console.log('~ number', number);

  const showData = data => {
    const number = data ? String(data).padStart(3, '0') : '000';
    return isLoading ? <Spiner /> : number;
  };
  console.log('~ isLoading', isLoading);

  return (
    <Row>
      <Head>{head}</Head>
      <Data number={data >= 0}>
        {
          isLoading && number ? String(number).padStart(3, '0') : '000'
          // showData(number)
        }

        <Unit>{unit}</Unit>
      </Data>
    </Row>
  );
};
