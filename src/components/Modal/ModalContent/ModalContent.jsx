import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button';
import { DailyCalorieIntake } from 'components/DailyCalorieIntake';
import { Content, CloseModalButton } from '../Modal.styled';
import DialogContent from '@mui/material/DialogContent';
export const ModalContent = ({ setShowModal }) => {
  const navigate = useNavigate();

  return (
    <DialogContent sx={{ m: 0, p: 0 }}>
      <Content>
        <DailyCalorieIntake />
        <Button
          autoFocus
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
    </DialogContent>
  );
};
