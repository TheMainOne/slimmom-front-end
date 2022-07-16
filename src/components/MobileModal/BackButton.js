import { BackButtonStyled } from './BackButton.styled';
import { IconCloseModal } from './MobileModal.styled';

export const BackButton = ({ onClose }) => (
  <BackButtonStyled onClick={onClose}>
    <IconCloseModal />
  </BackButtonStyled>
);
