import DiaryProductsList from 'components/DiaryProductsList';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';

import { DiaryPageStyled } from './DiaryPageContent.styled';
import { useSelector } from 'react-redux';
import { BlockWrapper } from 'components/Container';
import { useShowForm } from './hooks';
import { DiaryCalendarAndForm } from './DiaryCalendarAndForm';
import { useShowModal } from 'hooks/ui';
import {
  AddProductButton,
  AddProductIcon,
} from 'components/Forms/DiaryAddProductForm/AddProduct.mui';
import useResizeAware from 'react-resize-aware';

const TABLET_WIDTH_BREAKPOINT = 768;

export const DiaryPageContent = () => {
  const [addProduct, { isLoading: isAddingProduct }] =
    diaryApi.useAddProductMutation();
  const currentDate = useSelector(state => state.calendar.activeDate);

  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  const shouldShowForm = useShowForm(); // true only for now or future dates

  const [resizeListener, { width }] = useResizeAware();
  const isMobile = width < TABLET_WIDTH_BREAKPOINT;
  const [showMobileModal, toggleModal] = useShowModal();

  return (
    <BlockWrapper>
      {resizeListener}
      <DiaryPageStyled>
        <DiaryCalendarAndForm
          addProduct={addProduct}
          shouldShowForm={shouldShowForm}
          isMobile={isMobile}
          showMobileModal={showMobileModal}
          toggleModal={toggleModal}
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

        {isMobile && shouldShowForm && (
          <AddProductButton
            color="primary"
            variant="contained"
            type="button"
            onClick={toggleModal}
          >
            <AddProductIcon />
          </AddProductButton>
        )}
      </DiaryPageStyled>
    </BlockWrapper>
  );
};
