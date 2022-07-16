import { MobileModalContent, MobileModalStyled } from './MobileModal.styled';

export const MobileModal = ({ /* onClose, */ children }) => {
  return (
    <MobileModalStyled>
      <MobileModalContent>{children}</MobileModalContent>
    </MobileModalStyled>
  );
};
