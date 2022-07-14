import DiaryProductsListItem from './DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';
const DiaryProductsList = ({ products }) => {
  return (
    <List>
      {products.map(({ _id, title: { ua }, weight, kcal }) => (
        <DiaryProductsListItem
          key={_id}
          title={ua}
          weight={weight}
          kcal={kcal}
        />
      ))}
    </List>
  );
};

export default DiaryProductsList;
