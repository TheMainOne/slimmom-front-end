import { ListItem, Title, Text, Measure } from './DiaryProductsListItem.styled';

const DiaryProductsListItem = ({ title, weight, kcal }) => {
  return (
    <ListItem>
      <Title>{title}</Title>
      <Title>
        <Text>{weight}</Text>
        <Measure>g</Measure>
      </Title>
      <Title>
        <Text>{kcal}</Text>
        <Measure>kcal</Measure>
      </Title>
      <button>X</button>
    </ListItem>
  );
};

export default DiaryProductsListItem;
