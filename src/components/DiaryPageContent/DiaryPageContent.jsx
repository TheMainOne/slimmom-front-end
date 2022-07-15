import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import { DiaryPageStyled } from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';
import { BlockWrapper } from 'components/Container';
import { useShowForm } from './hooks';
import { useTranslation } from 'react-i18next';
export const DiaryPageContent = () => {
  const { t } = useTranslation();

  const [addProduct, { isLoading: isAddingProduct }] =
    diaryApi.useAddProductMutation();
  const currentDate = useSelector(state => state.calendar.activeDate);

  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  const showForm = useShowForm(currentDate);

  return (
    <BlockWrapper>
      <DiaryPageStyled>
        <DiaryDateCalendar />

        {showForm && <DiaryAddProductForm addProduct={addProduct} />}

        {isLoading || isAddingProduct ? (
          <Spinner />
        ) : Boolean(consumedProducts.length) ? (
          <DiaryProductsList
            products={consumedProducts}
            currentDate={currentDate}
          />
        ) : (
          <h1>{t('noFood')}</h1>
        )}
      </DiaryPageStyled>
    </BlockWrapper>
  );
};
