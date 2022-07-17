import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake';
import { Content, CloseModalButton } from '../Modal.styled';

export const ModalContent = ({ setShowModal }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Content>
        <DailyCalorieIntake />
        <Button
          text={'Start losing weight'}
          // centered={'true'}
          onClick={() => navigate('/signup')}
        ></Button>
      </Content>
      <CloseModalButton
        aria-label="Close modal"
        onClick={() => {
          setShowModal(prev => !prev);
        }}
      />
    </div>
  );
};
