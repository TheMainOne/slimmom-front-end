import { ListItem, Title, Text, Measure } from './DiaryProductsListItem.styled';
import { diaryApi } from 'redux/apis';

const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  currentDate,
  productId,
}) => {
  // console.log(id);
  const [deleteProduct, { isLoading: isDeleting }] =
    diaryApi.useDeleteProductFromDateMutation();
  // console.log(data);
  // console.log(date);

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
      <button
        type="button"
        onClick={() => deleteProduct({ currentDate, productId })}
        disabled={isDeleting ? true : false}
      >
        X
      </button>
    </ListItem>
  );
};

// onClick={() => deleteProduct(id)}

export default DiaryProductsListItem;
