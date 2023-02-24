import { useEffect, useState } from 'react';
import PageTitle from 'components/PageTitle';
import { PageContainer, FormContainer } from './MainPage.styled';

import Container from 'components/Container';
import { Modal } from 'components/Modal';
import CalculatorСalorieForm from 'components/Forms/CalculatorСalorieForm/CalculatorСalorieForm';
import { useMobileModal } from 'hooks/ui';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(prev => !prev);

  const [showMobileModal, , hideMobileModal] = useMobileModal();

  useEffect(() => {
    return () => {
      if (showModal || showMobileModal) {
        hideMobileModal();
        setShowModal(false);
      }
    };
  }, [hideMobileModal, showMobileModal, showModal]);

  const { t } = useTranslation();
  return (
    <Container>
      <PageContainer>
        <PageTitle title={t('title')} />
        <FormContainer>
          <CalculatorСalorieForm openModal={openModal} />
        </FormContainer>

        {(showModal || showMobileModal) && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </PageContainer>
    </Container>
  );
};

export default MainPage;
