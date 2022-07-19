import { useEffect, useState } from 'react';
import PageTitle from 'components/PageTitle';
import { PageContainer, FormContainer } from './MainPage.styled';

import Container from 'components/Container';
import { Modal } from 'components/Modal';
import useResizeAware from 'react-resize-aware';
import CalculatorСalorieForm from 'components/Forms/CalculatorСalorieForm/CalculatorСalorieForm';
import { useShowModal } from 'hooks/ui';

const MainPage = () => {
  const [resizeListener] = useResizeAware();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(prev => !prev);

  const [showMobileModal, toggleMobileModal] = useShowModal();

  useEffect(() => {
    return toggleMobileModal;
  }, [toggleMobileModal]);

  return (
    <Container>
      <PageContainer>
        {resizeListener}
        <PageTitle title={'Calculate your daily calorie intake right now'} />
        <FormContainer>
          <CalculatorСalorieForm openModal={openModal} />
        </FormContainer>

        {(showModal || showMobileModal) && (
          <Modal
            showMobileModal={showMobileModal}
            toggleMobileModal={toggleMobileModal}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </PageContainer>
    </Container>
  );
};

export default MainPage;
