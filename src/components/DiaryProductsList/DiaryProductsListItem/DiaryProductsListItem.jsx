import { useState } from 'react';
import { diaryApi } from 'redux/apis';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from 'components/IconButton';
import {
  ListItem,
  Title,
  Text,
  Measure,
  ButtonContainer,
  PopoverStyled,
} from './DiaryProductsListItem.styled';

const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  currentDate,
  productId,
  disabled,
  getNotifyData,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteProduct, { isLoading: isDeleting }] =
    diaryApi.useDeleteProductFromDateMutation();
  const isDisabledButton = isDeleting
    ? isDeleting
    : disabled
    ? disabled
    : false;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOnDeleteClick = () => {
    getNotifyData({
      title,
      deleteProduct,
      deletingInfo: { currentDate, productId },
    });
  };

  return (
    <ListItem>
      <Title onClick={handleClick}>{title}</Title>
      <PopoverStyled
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 1 }}>{title}</Typography>
      </PopoverStyled>
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
          onClick={handleOnDeleteClick}
          disabled={isDisabledButton}
        />
      </ButtonContainer>
    </ListItem>
  );
};

export default DiaryProductsListItem;
