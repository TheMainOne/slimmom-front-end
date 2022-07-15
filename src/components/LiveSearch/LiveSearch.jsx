import { TextField, Autocomplete } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
export const LifeSearch = ({
  items,
  setProductId,
  inputValue,
  onInputChange,
}) => {
  const { t } = useTranslation();

  return (
    <Autocomplete
      id="possible_products"
      // actual displayed items
      getOptionLabel={item => (item.title?.ua || item.title?.ru) ?? ''}
      isOptionEqualToValue={(option, value) => option._id === value._id}
      options={items}
      sx={{ width: 300 }}
      noOptionsText={t('noMatch')}
      renderOption={(props, item) => (
        <Box component="li" {...props} key={item._id}>
          {item.title?.ua || item.title?.ru}
        </Box>
      )}
      renderInput={params => <TextField {...params} label={t('enter')} />}
      onChange={(e, val) => {
        setProductId(val?._id);
      }}
      // text ------
      inputValue={inputValue}
      onInputChange={onInputChange}
      // text ------

      filterOptions={x => x}
      groupBy={option => option.categories?.[0]}
      // getOptionDisabled={option =>
      //   bannedProducts.some(bannedProduct => bannedProduct._id === option._id)
      // }

      clearOnBlur={false}
      selectOnFocus
      handleHomeEndKeys
      autoHighlight
    />
  );
};
