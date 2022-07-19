import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake';
import { Content, CloseModalButton } from '../Modal.styled';
export const ModalContent = ({ handleClose }) => {
  const navigate = useNavigate();

  return (
    <>
      <Content>
        <DailyCalorieIntake />
        <Button
          autoFocus
          text={'Start losing weight'}
          // centered={'true'}
          onClick={() => navigate('/signup')}
        ></Button>
      </Content>
      <CloseModalButton aria-label="Close modal" onClick={handleClose} />
    </>
  );
};
