import { TextField, Stack, Autocomplete } from '@mui/material';
import { Box } from '@mui/system';

export const LifeSearch = ({
  name,
  items,
  title,
  setTitle,
  onChange,
  productId,
  setSaveId,
}) => {
  return (
    <Stack sx={{ width: 300, margin: 'auto' }}>
      <Autocomplete
        id="possible_products"
        // actual displayed items
        getOptionLabel={item => (item.title?.ua || item.title?.ru) ?? ''}
        isOptionEqualToValue={(option, value) => option._id === value._id}
        options={items}
        sx={{ width: 300 }}
        noOptionsText={'Np products matches'}
        renderOption={(props, item) => (
          <Box component="li" {...props} key={item._id}>
            {item.title?.ua || item.title?.ru}
          </Box>
        )}
        renderInput={params => (
          <TextField {...params} label="Enter product name" />
        )}
        onChange={(e, val) => {
          console.log({ val });
          setSaveId(prevVal => val?._id);
        }}
        name={name}
        inputValue={title}
        onInputChange={(_, newValue) => setTitle(prevValue => newValue)}
        filterOptions={x => x}
        groupBy={option => option.categories?.[0]}
        // getOptionDisabled={option =>
        //   bannedProducts.some(bannedProduct => bannedProduct._id === option._id)
        // }

        clearOnBlur="false"
        selectOnFocus
        handleHomeEndKeys
        autoHighlight
      />
    </Stack>
  );
};
