import DiaryProductsListItem from './DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';

const DiaryProductsList = ({ products, currentDate }) => {
  console.log('products', products);
  console.log('currentDate', currentDate);

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
        />
      ))}
    </List>
  );
};

export default DiaryProductsList;
