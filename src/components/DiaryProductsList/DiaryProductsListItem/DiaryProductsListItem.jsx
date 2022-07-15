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
  disabled,
}) => {
  const [deleteProduct, { isLoading: isDeleting }] =
    diaryApi.useDeleteProductFromDateMutation();
  const isDisabledButton = isDeleting
    ? isDeleting
    : disabled
    ? disabled
    : false;
  return (
    <ListItem>
      <Title title={title}>{title}</Title>
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
          disabled={isDisabledButton}
        />
      </ButtonContainer>
    </ListItem>
  );
};

export default DiaryProductsListItem;
