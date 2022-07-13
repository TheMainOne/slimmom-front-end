import DiaryProductsListItem from './DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';
const DiaryProductsList = ({ consumedProducts }) => {
  return (
    <List>
      {consumedProducts.map(({ _id, title, weight, kcal }) => (
        <DiaryProductsListItem
          key={_id}
          title={title}
          weight={weight}
          kcal={kcal}
        />
      ))}
    </List>
  );
};

export default DiaryProductsList;
