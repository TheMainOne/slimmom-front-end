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
import { useTranslation } from 'react-i18next';
const DiaryProductsListItem = ({
  title,
  weight,
  kcal,
  currentDate,
  productId,
  disabled,
}) => {
  const { t } = useTranslation();

  const [deleteProduct, { isLoading: isDeleting }] =
    diaryApi.useDeleteProductFromDateMutation();
  const isDisabledButton = isDeleting
    ? isDeleting
    : disabled
    ? disabled
    : false;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
        <Measure>{t('g')}</Measure>
      </Title>
      <Title>
        <Text>{kcal}</Text>
        <Measure>{t('kcal')}</Measure>
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
