import DiaryProductsList from 'components/DiaryProductsList';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import { DiaryPageStyled } from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';
import { BlockWrapper } from 'components/Container';
import { useShowForm } from './hooks';
import { DiaryCalendarAndForm } from './DiaryCalendarAndForm';

export const DiaryPageContent = () => {
  const [addProduct, { isLoading: isAddingProduct }] =
    diaryApi.useAddProductMutation();
  const currentDate = useSelector(state => state.calendar.activeDate);

  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  const shouldShowForm = useShowForm(); // true only for now or future dates

  return (
    <BlockWrapper>
      <DiaryPageStyled>
        <DiaryCalendarAndForm
          addProduct={addProduct}
          shouldShowForm={shouldShowForm}
        />

        {isLoading || isAddingProduct ? (
          <Spinner />
        ) : Boolean(consumedProducts.length) ? (
          <DiaryProductsList
            products={consumedProducts}
            currentDate={currentDate}
            disabled={!shouldShowForm}
          />
        ) : (
          <h1>Сегодня вы ещё не ели!</h1>
        )}
      </DiaryPageStyled>
    </BlockWrapper>
  );
};
