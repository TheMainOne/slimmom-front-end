// import { useAddProductMutation } from 'redux/apis';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
// import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import React from 'react';
// import { useAddProductMutation } from 'redux/apis';

// import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';

import {
  DiaryPageContentStyled,
  DiaryPageStyled,
} from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';

export const DiaryPageContent = () => {
  const currentDate = useSelector(state => state.calendar.activeDate);
  // const { data: products, isLoading } = useGetProductsQuery();
  // const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();
  // const [addProduct] = useAddProductMutation();

  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  return (
    <DiaryPageContentStyled>
      <DiaryPageStyled>
        <DiaryDateCalendar />

        {/* <DiaryAddProductForm addProduct={addProduct} /> */}

        {isLoading ? (
          <Spinner />
        ) : Boolean(consumedProducts.length) ? (
          <DiaryProductsList
            products={consumedProducts}
            currentDate={currentDate}
          />
        ) : (
          <h1>Сегодня вы ещё не ели!</h1>
        )}
      </DiaryPageStyled>
    </DiaryPageContentStyled>
  );
};
