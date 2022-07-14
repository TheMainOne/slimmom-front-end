import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { DiaryAddProductFormStyled } from './DiaryAddProductForm.styled';
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
import * as Yup from 'yup';
import { formatISO } from 'date-fns';

const { stringify } = JSON;

const limit = 10;
export const DiaryAddProductForm = ({ addProduct }) => {
  const [title, setTitle] = useState('');
  const [saveId, setSaveId] = useState('');

  const [getProducts, { data: { data: products = [] } = {} }] =
    useGetProductsMutation();

  const parseISOString = useSelector(selectActiveDate);
  const date = formatISO(parseISOString, { representation: 'date' });

  const formik = useFormik({
    initialValues: {
      productId: '',
      weight: 0,
    },
    validationSchema: Yup.object({
      productId: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
      weight: Yup.string()
        .min(1, 'min 1 char')
        .max(7, 'max 20 char')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      const { weight } = values;

      console.log({ date, id: saveId, weight });

      if (!date || !saveId || !weight) {
        return toast('Please fill all fields');
      }

      const newDiaryProduct = { date, id: saveId, weight };
      addProduct(newDiaryProduct);
      toast(`POST: ${stringify(newDiaryProduct, null, 2)}`);

      resetForm();
    },
  });

  const debouncedGetProducts = useMemo(
    () => debounce(getProducts, 500),
    [getProducts]
  );

  useEffect(() => {
    if (title.length < 2) return;

    debouncedGetProducts({ title, limit });
    return () => {};
  }, [debouncedGetProducts, getProducts, title]);

  return (
    <DiaryAddProductFormStyled onSubmit={formik.handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <LifeSearch
          name="productId"
          items={products}
          title={title}
          setTitle={setTitle}
          onChange={formik.handleChange}
          productId={saveId}
          setSaveId={setSaveId}
        />
        <p>{formik.errors.productId}</p>
      </div>

      {/* TODO: check mockup add product form */}
      {/* <AddProductInput
        onChange={formik.handleChange}
        value={formik.values.product}
      /> */}

      {/* TODO: check mockup add product form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <AddProductInput
          variant="standard"
          name="weight"
          label="weight"
          type="text"
          minLength={1}
          maxLength={6}
          pattern="\d{1,6}"
          title="min 1, max 6 digits"
          onChange={formik.handleChange}
          value={formik.values.weight}
          required
        />
        <p>{formik.errors.weight}</p>
      </div>

      <AddProductButton color="primary" variant="contained" type="submit">
        <AddProductIcon />
      </AddProductButton>
    </DiaryAddProductFormStyled>
  );
};
