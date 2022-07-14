import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
// import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import {
  DiaryPageContentStyled,
  DiaryPageStyled,
} from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';
import { BlockWrapper } from 'components/Container';

export const DiaryPageContent = () => {
  const currentDate = useSelector(state => state.calendar.activeDate);
  // const [addProduct] = diaryApi.useAddProductMutation();

  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  return (
    <BlockWrapper>
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
<<<<<<< HEAD
    </DiaryPageContentStyled>
=======

      {/* Natasha */}
      {/* {isAddingProduct ? ( */}
      {isLoading ? (
        <Spinner />
      ) : consumedProducts ? (
        <DiaryProductsList products={consumedProducts} />
      ) : (
        <h1>Ты еще не ел сегодня!</h1>
      )}

      {/* ) : ( */}

      {/* )} */}
    </BlockWrapper>
>>>>>>> main
  );
};
