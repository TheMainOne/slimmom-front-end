import { useState } from 'react';
import { useSelector } from 'react-redux';
import { diaryApi } from 'redux/apis';
import { Spinner } from 'components/Spinner';
import { BlockWrapper } from 'components/Container';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import { useShowForm } from './hooks';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList';
import { Modal } from 'components/Modal';
import NotifyAboutDeleteProduct from 'components/NotifyAboutDeleteProduct';
import { DiaryPageStyled } from './DiaryPageContent.styled';

export const DiaryPageContent = () => {
  const [showModal, setShowModal] = useState(false);
  const shouldShowForm = useShowForm(); // true only for now or future dates
  const currentDate = useSelector(state => state.calendar.activeDate);
  const [notifyOptions, setNotifyOptions] = useState({});

  const [addProduct, { isLoading: isAddingProduct }] =
    diaryApi.useAddProductMutation();
  const { data = {}, isLoading } =
    diaryApi.useGetProductsByDateQuery(currentDate);
  const { data: { consumedProducts = [] } = {} } = data;

  const getNotifyData = data => {
    // console.log(data);
    const { title, deleteProduct, deletingInfo, openModal } = data;
    setNotifyOptions({ title, deleteProduct, deletingInfo });
    setShowModal(openModal);
  };

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
            disabled={!shouldShowForm}
            getNotifyData={getNotifyData}
            onOpenModal={setShowModal}
          />
        ) : (
          <h1>Сегодня вы ещё не ели!</h1>
        )}
      </DiaryPageStyled>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <NotifyAboutDeleteProduct
          onCloseModal={setShowModal}
          notifyOptions={notifyOptions}
        />
      </Modal>
    </BlockWrapper>
  );
};
