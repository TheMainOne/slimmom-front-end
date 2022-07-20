import { Autocomplete } from '@mui/material';
import { Box } from '@mui/system';
import { InputProduct } from 'components/Forms/DiaryAddProductForm/AddProduct.mui';
import { useTranslation } from 'react-i18next';
export const LifeSearch = ({
  items,
  setProductId,
  inputValue,
  onInputChange,
}) => {
  const { t } = useTranslation();
  const options = items.map(option => {
    const firstLetter = option.title.ua[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="possible_products"
      getOptionLabel={item => (item.title?.ua || item.title?.ru) ?? ''}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      options={options?.sort(
        (a, b) => -b.firstLetter?.localeCompare(a.firstLetter)
      )}
      sx={{ width: 300 }}
      noOptionsText={t('noMatch')}
      renderOption={(props, item) => (
        <Box component="li" {...props} key={item._id}>
          {item.title?.ua || item.title?.ru}
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
