import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake';
import { Content, CloseModalButton } from '../Modal.styled';
export const ModalContent = ({ setShowModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <Content>
        <DailyCalorieIntake />
        <Button
          autoFocus
          text={'Start losing weight'}
          onClick={() => navigate('/signup')}
        ></Button>
      </Content>
      <CloseModalButton
        aria-label="Close modal"
        onClick={() => {
          setShowModal(prev => !prev);
        }}
      />
    </>
  );
};
