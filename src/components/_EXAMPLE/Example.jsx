import { Spinner } from 'components/Spinner';
import {
  Title,
  FirstListItem,
  SecondListItem,
  ThirdListItem,
} from './Example.styled';

const Example = () => {
  return (
    <div>
      <Title>Пример использования темы со стилями</Title>
      <ul>
        <FirstListItem>Применили fonts и lineHeight</FirstListItem>
        <SecondListItem>Применили colors и spacing</SecondListItem>
        <ThirdListItem>Применили тень</ThirdListItem>
      </ul>

      <Spinner />
    </div>
  );
};

export default Example;
