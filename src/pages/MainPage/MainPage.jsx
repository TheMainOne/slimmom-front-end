import { useState } from 'react';
import PageTitle from 'components/PageTitle';
import { PageContainer } from './MainPage.styled';
import Container from 'components/Container';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { ModalContent } from 'components/Modal/ModalContent';
import useResizeAware from 'react-resize-aware';

const MainPage = () => {
  const [resizeListener, { width, height }] = useResizeAware();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <Container>
      <PageContainer>
        {resizeListener}
        <PageTitle title={'Calculate your daily calorie intake right now'} />
        <div
          style={{
            maxidth: '512px',
            height: '190px',
            marginTop: '68px',
            backgroundColor: 'violet',
          }}
        >
          width={width}
          height={height}
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ModalContent setShowModal={setShowModal} />
        </Modal>
        <Button onClick={openModal} />
      </PageContainer>
    </Container>
  );
};

export default MainPage;
