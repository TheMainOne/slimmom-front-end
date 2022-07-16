import DiaryProductsListItem from './DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';

const DiaryProductsList = ({
  products,
  currentDate,
  disabled,
  getNotifyData,
  onOpenModal,
}) => {
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
          getNotifyData={getNotifyData}
          onOpenModa={onOpenModal}
        />
      ))}
    </List>
  );
};

export default DiaryProductsList;
