import { useState } from 'react';
import { useSelector } from 'react-redux';
import { diaryApi } from 'redux/apis';
import { Spinner } from 'components/Spinner';
import { BlockWrapper } from 'components/Container';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import { useShowForm } from './hooks';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList';
import { AlertModal } from 'components/AlertModal';
import { DiaryPageStyled } from './DiaryPageContent.styled';

export const DiaryPageContent = () => {
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
    const { title, deleteProduct, deletingInfo, openModal } = data;
    setAlertOptions({ title, deleteProduct, deletingInfo });
    setShowModal(openModal);
  };

  const handleCloseModal = () => {
    deleteProduct(deletingInfo);
    setShowModal(!showModal);
  };

  return (
    <BlockWrapper>
      <DiaryPageStyled>
        <DiaryDateCalendar />

        {shouldShowForm && <DiaryAddProductForm addProduct={addProduct} />}

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
          <h1>Сегодня вы ещё не ели!</h1>
        )}
      </DiaryPageStyled>
      <AlertModal
        leftBtnText="Ні не хочу!"
        rightBtnText="Так, хочу!"
        open={showModal}
        onClick={handleCloseModal}
        setOpen={setShowModal}
        dialogTitle="Ви дійсно хочете видалити цей продукт?"
        contentText={title}
      />
    </BlockWrapper>
  );
};
