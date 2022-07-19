import { useState } from 'react';
import PageTitle from 'components/PageTitle';
import { PageContainer, FormContainer } from './MainPage.styled';

import Container from 'components/Container';
import { Modal } from 'components/Modal';
import useResizeAware from 'react-resize-aware';
import CalculatorСalorieForm from 'components/Forms/CalculatorСalorieForm/CalculatorСalorieForm';

const MainPage = () => {
  const [resizeListener] = useResizeAware();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(prev => !prev);

  return (
    <Container>
      <PageContainer>
        {resizeListener}
        <PageTitle title={'Calculate your daily calorie intake right now'} />
        <FormContainer>
          <CalculatorСalorieForm openModal={openModal} />
        </FormContainer>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </PageContainer>
    </Container>
  );
};

export default MainPage;
