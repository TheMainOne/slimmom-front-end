import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake';
import { Content, CloseModalButton } from '../Modal.styled';
export const ModalContent = ({ handleClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Content>
        <DailyCalorieIntake />
        <Button
          autoFocus
          text={t('start')}
          onClick={() => navigate('/signup')}
        ></Button>
      </Content>
      <CloseModalButton aria-label="Close modal" onClick={handleClose} />
    </>
  );
};
