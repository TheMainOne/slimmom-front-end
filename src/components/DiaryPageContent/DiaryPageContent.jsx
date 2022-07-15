import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import { DiaryPageStyled } from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';
import { BlockWrapper } from 'components/Container';
import { useShowForm } from './hooks';

export const DiaryPageContent = () => {
  const [addProduct, { isLoading: isAddingProduct }] =
    diaryApi.useAddProductMutation();
  const currentDate = useSelector(state => state.calendar.activeDate);

  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  const shouldShowForm = useShowForm(); // true only for now or future dates
  const isDisabledDelete = !shouldShowForm; // true only for past dates
  console.log({ isDisabledDelete });

  return (
    <BlockWrapper>
      <DiaryPageStyled>
        <DiaryDateCalendar />

        {shouldShowForm && <DiaryAddProductForm addProduct={addProduct} />}

        {isLoading || isAddingProduct ? (
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
    </BlockWrapper>
  );
};
