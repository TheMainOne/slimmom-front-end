import { useListenEscKeyDown, useToggleNoScroll } from 'hooks/ui';
import { createPortal } from 'react-dom';
import { getRefs } from 'utils';
import { MobileModalContent, MobileModalBackdrop } from './MobileModal.styled';
const { mobileModalRoot } = getRefs();

export const MobileModal = ({ onClose, children }) => {
  useToggleNoScroll();

  useListenEscKeyDown(onClose);

  return createPortal(
    <MobileModalBackdrop>
      <MobileModalContent>{children}</MobileModalContent>
    </MobileModalBackdrop>,
    mobileModalRoot
  );
};
