import { diaryApi } from 'redux/apis';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from 'components/IconButton';
import {
  ListItem,
  Title,
  Text,
  Measure,
  ButtonContainer,
} from './DiaryProductsListItem.styled';

const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  currentDate,
  productId,
}) => {
  const [deleteProduct, { isLoading: isDeleting }] =
    diaryApi.useDeleteProductFromDateMutation();

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
      <ButtonContainer>
        <IconButton
          type="button"
          icon={<CloseIcon />}
          onClick={() => deleteProduct({ currentDate, productId })}
          disabled={isDeleting ? true : false}
        />
      </ButtonContainer>
      {/* 
      <ButtonContainer>
        <IconButton type="button" icon={<CloseIcon />} />
      </ButtonContainer> */}
    </ListItem>
  );
};

// onClick={() => deleteProduct(id)}

export default DiaryProductsListItem;
