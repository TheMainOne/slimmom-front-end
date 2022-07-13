import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
// import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import React, { useState } from 'react';
// import { useAddProductMutation } from 'redux/apis';

import {
  DiaryPageContentStyled,
  DiaryPageStyled,
} from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';

export const DiaryPageContent = () => {
  const currentDate = useSelector(state => state.calendar.activeDate);
  const [date, setDate] = useState(currentDate);
  // const { data: products, isLoading } = useGetProductsQuery();
  // const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();

  const { data, isLoading } = diaryApi.useGetProductsByDateQuery(currentDate);
  console.log(data);
  console.log(currentDate);

  return (
    <DiaryPageContentStyled>
      {/* Kostia */}
      <DiaryPageStyled>
        <DiaryDateCalendar />

        {/* <DiaryAddProductForm addProduct={addProduct} /> */}
      </DiaryPageStyled>

      {/* Natasha */}
      {/* {isAddingProduct ? ( */}
      {isLoading ? (
        <Spinner />
      ) : data.consumedProducts ? (
        <DiaryProductsList consumedProducts={data.consumedProducts} />
      ) : (
        <h1>Ты еще не ел сегодня!</h1>
      )}

      {/* ) : ( */}

      {/* )} */}
    </DiaryPageContentStyled>
  );
};
