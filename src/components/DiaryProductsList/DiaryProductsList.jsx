import DiaryProductsListItem from './DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';
const DiaryProductsList = ({ consumedProducts }) => {
  return (
    <List>
      {consumedProducts?.map(({ title, weight, kcal }) => (
        <DiaryProductsListItem
          key={title}
          title={title}
          weight={weight}
          kcal={kcal}
        />
      ))}
    </List>
  );
};

export default DiaryProductsList;
