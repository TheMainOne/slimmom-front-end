import DiaryProductsListItem from './DiaryProductsListItem';
import { List } from './DiaryProductsList.styled';

const DiaryProductsList = ({
  products,
  currentDate,
  disabled,
  getNotifyData,
  onOpenModal,
}) => {
  const lang = localStorage.getItem('i18nextLng');

  return (
    <List>
      {products.map(({ _id: productId, title, weight, kcal }) => (
        <DiaryProductsListItem
          key={productId}
          title={title[lang]}
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
