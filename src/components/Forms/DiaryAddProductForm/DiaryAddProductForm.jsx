import { toast } from 'react-toastify';
import {
  DiaryAddProductFormStyled,
  FlexWrapper,
} from './DiaryAddProductForm.styled';
import {
  AddProductButton,
  AddProductIcon,
  AddProductInput,
} from './AddProduct.mui';
import { useSelector } from 'react-redux';
import { selectActiveDate } from 'redux/slices';
import { useGetProductsMutation } from 'redux/apis';
import { useEffect, useMemo, useState } from 'react';
import { LifeSearch } from 'components/LiveSearch';
import debounce from 'lodash/debounce';
import { formatISO } from 'date-fns';
import { addProductSchema } from 'models';

const limit = 10;
export const DiaryAddProductForm = ({ addProduct, toggleModal }) => {
  const [title, setTitle] = useState('');
  const [productId, setProductId] = useState('');

  const [getProducts, { data: { data: products = [] } = {} }] =
    useGetProductsMutation();

  const parseISOString = useSelector(selectActiveDate);
  const date = formatISO(parseISOString, { representation: 'date' });

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const weight = Number(formData.get('weight').trim());

    if (!date || !productId || !weight) {
      return toast('Please fill date, productName and weight');
    }
    const newDiaryProduct = { date, id: productId, weight };

    try {
      await addProductSchema.validate(newDiaryProduct);
      await addProduct(newDiaryProduct);
      toast(newDiaryProduct);
      form.reset();
      toggleModal();
    } catch (error) {
      toast(`Not added: ${error.message}`);
      console.log(error);
    }
  };

  const debouncedGetProducts = useMemo(
    () => debounce(getProducts, 500),
    [getProducts]
  );

  useEffect(() => {
    if (!title.length) return;

    debouncedGetProducts({ title, limit });
  }, [debouncedGetProducts, getProducts, title]);

  return (
    <DiaryAddProductFormStyled onSubmit={handleSubmit}>
      <LifeSearch
        items={products}
        setProductId={setProductId}
        inputValue={title}
        onInputChange={(_, newTitle) => setTitle(newTitle)}
      />

      {/* TODO: check mockup add product form */}
      <FlexWrapper>
        <AddProductInput
          variant="standard"
          name="weight"
          label="Grams"
          type="text"
          title="min 1, max 6 digits"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]{1,6}' }}
          required
        />
      </FlexWrapper>

      <AddProductButton color="primary" variant="contained" type="submit">
        <AddProductIcon />
      </AddProductButton>
    </DiaryAddProductFormStyled>
  );
};
