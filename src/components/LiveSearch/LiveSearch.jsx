import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';
import { InputProduct } from 'components/Forms/DiaryAddProductForm/AddProduct.mui';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectActiveLang } from 'redux/slices';
export const LifeSearch = ({
  items,
  setProductId,
  inputValue,
  onInputChange,
}) => {
  const activeLang = useSelector(selectActiveLang);
 
  const { t } = useTranslation();

  const isEng = activeLang === 'en';
  const options = items.map(option => {
    const title = isEng ? option.title.en : option.title.ua;
    const firstLetter = title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="possible_products"
      getOptionLabel={item => (isEng ? item.title.en : item.title.ua) ?? ''}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      options={options?.sort(
        (a, b) => -b.firstLetter?.localeCompare(a.firstLetter)
      )}
      sx={{ width: 300 }}
      noOptionsText={t('noMatch')}
      renderOption={(props, item) => (
        <Box component="li" {...props} key={item._id}>
          {isEng ? item.title.en : item.title.ua}
        </Box>
      )}
      renderInput={params => (
        <InputProduct variant="standard" {...params} label={t('enter')} />
      )}
      onChange={(e, val) => {
        setProductId(val?._id);
      }}
      inputValue={inputValue}
      onInputChange={onInputChange}
      filterOptions={x => x}
      groupBy={option => option.firstLetter}
      clearOnBlur={false}
      selectOnFocus
      handleHomeEndKeys
      autoHighlight
    />
  );
};
