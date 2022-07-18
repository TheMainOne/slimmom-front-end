import { useState } from 'react';
import PageTitle from 'components/PageTitle';
import { PageContainer, FormContainer } from './MainPage.styled';

import Container from 'components/Container';
import { Modal } from 'components/Modal';
import { ModalContent } from 'components/Modal/ModalContent';
import useResizeAware from 'react-resize-aware';
import CalculatorСalorieForm from 'components/Forms/CalculatorСalorieForm/CalculatorСalorieForm';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const [resizeListener] = useResizeAware();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(prev => !prev);
  const { t } = useTranslation();
  return (
    <Container>
      <PageContainer>
        {resizeListener}
        <PageTitle title={t('title')} />
        <FormContainer>
          <CalculatorСalorieForm openModal={openModal} />
        </FormContainer>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ModalContent setShowModal={setShowModal} />
        </Modal>
      </PageContainer>
    </Container>
  );
};

export default MainPage;
