import DiaryProductsListItem from './DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';

const DiaryProductsList = ({ products, currentDate, disabled }) => {
  return (
    <List>
      {products.map(({ _id: productId, title: { ua }, weight, kcal }) => (
        <DiaryProductsListItem
          key={productId}
          title={ua}
          weight={weight}
          kcal={kcal}
          currentDate={currentDate}
          productId={productId}
          disabled={disabled}
        />
      ))}
    </List>
  );
};

export default DiaryProductsList;
