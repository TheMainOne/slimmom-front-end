import DiaryProductsList from 'components/DiaryProductsList';
import { Spinner } from 'components/Spinner';
import { diaryApi } from 'redux/apis';
import { DiaryPageStyled } from './DiaryPageContent.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BlockWrapper } from 'components/Container';
import { useShowForm } from './hooks';
import { useTranslation } from 'react-i18next';
import EmptyListTitle from 'components/EmptyListTitle';
import { DiaryCalendarAndForm } from './DiaryCalendarAndForm';
import { useShowModal } from 'hooks/ui';
import {
  AddProductButton,
  AddProductIcon,
} from 'components/Forms/DiaryAddProductForm/AddProduct.mui';
import useResizeAware from 'react-resize-aware';
import { AlertModal } from 'components/AlertModal';

const TABLET_WIDTH_BREAKPOINT = 768;

export const DiaryPageContent = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const shouldShowForm = useShowForm(); // true only for now or future dates
  const currentDate = useSelector(state => state.calendar.activeDate);
  const [alertOptions, setAlertOptions] = useState({});
  const {
    title = '',
    deleteProduct = () => {},
    deletingInfo = {},
  } = alertOptions;

  const [addProduct] = diaryApi.useAddProductMutation();
  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  const getNotifyData = data => {
    const { title, deleteProduct, deletingInfo } = data;
    setAlertOptions({ title, deleteProduct, deletingInfo });
    toggleModal();
  };

  const toggleModal = () => setShowModal(!showModal);

  const handleCloseModal = () => {
    deleteProduct(deletingInfo);
    setShowModal(!showModal);
  };

  const [resizeListener, { width }] = useResizeAware();
  const isMobile = width < TABLET_WIDTH_BREAKPOINT;
  const [showMobileModal, toggleMobileModal] = useShowModal();

  return (
    <BlockWrapper>
      {resizeListener}
      <DiaryPageStyled>
        <DiaryCalendarAndForm
          addProduct={addProduct}
          shouldShowForm={shouldShowForm}
          isMobile={isMobile}
          showMobileModal={showMobileModal}
          toggleMobileModal={toggleMobileModal}
        />

        {isLoading ? (
          <Spinner />
        ) : Boolean(consumedProducts.length) ? (
          <DiaryProductsList
            products={consumedProducts}
            currentDate={currentDate}
            disabled={!shouldShowForm}
            getNotifyData={getNotifyData}
            onOpenModal={setShowModal}
          />
        ) : (
          <EmptyListTitle>{t('noFood')}</EmptyListTitle>
        )}

        {isMobile && shouldShowForm && (
          <AddProductButton
            color="primary"
            variant="contained"
            type="button"
            onClick={toggleMobileModal}
          >
            <AddProductIcon />
          </AddProductButton>
        )}
      </DiaryPageStyled>
      <AlertModal
        leftBtnText={t('no')}
        rightBtnText={t('yes')}
        open={showModal}
        onClick={handleCloseModal}
        setOpen={setShowModal}
        dialogTitle={t('delete')}
        contentText={title}
      />
    </BlockWrapper>
  );
};
