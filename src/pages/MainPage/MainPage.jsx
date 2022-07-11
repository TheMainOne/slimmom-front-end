import { useState } from 'react';
import PageTitle from 'components/PageTitle';
import { PageContainer } from './MainPage.styled';
import Container from 'components/Container';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { ModalContent } from 'components/Modal/ModalContent';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <Container>
      <PageContainer>
        <PageTitle title={'Calculate your daily calorie intake right now'} />

        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ModalContent setShowModal={setShowModal} />
        </Modal>

        <Button onClick={openModal} />
      </PageContainer>
    </Container>
  );
};

export default MainPage;
