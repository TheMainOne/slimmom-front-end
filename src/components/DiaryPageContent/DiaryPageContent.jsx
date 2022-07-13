import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
// import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { Spinner } from 'components/Spinner';
import React from 'react';
// import { useAddProductMutation } from 'redux/apis';

import consumedProducts from 'components/DiaryProductsList/products.json';
import {
  DiaryPageContentStyled,
  DiaryPageStyled,
} from './DiaryPageContent.styled';

export const DiaryPageContent = () => {
  // const { data: products, isLoading } = useGetProductsQuery();
  // const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();

  return (
    <DiaryPageContentStyled>
      {/* Kostia */}
      <DiaryPageStyled>
        <DiaryDateCalendar />

        {/* <DiaryAddProductForm addProduct={addProduct} /> */}
      </DiaryPageStyled>

      {/* Natasha */}
      {/* {isAddingProduct ? ( */}
      <Spinner />
      {/* ) : ( */}
      <DiaryProductsList consumedProducts={consumedProducts} />
      {/* )} */}
    </DiaryPageContentStyled>
  );
};
