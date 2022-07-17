import { useListenEscKeyDown, useToggleNoScroll } from 'hooks/ui';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { getRefs } from 'utils';
import { MobileModalContent, MobileModalBackdrop } from './MobileModal.styled';
const { mobileModalRoot } = getRefs();

export const MobileModal = ({ onClose, children }) => {
  useToggleNoScroll();
  const [isTransparent, setIsTransparent] = useState(false);
  const onDragToggleBg = useCallback(() => setIsTransparent(show => !show), []);

  useListenEscKeyDown(onClose);

  return createPortal(
    <MobileModalBackdrop
      isTransparent={isTransparent}
      draggable={true}
      onTouchEnd={onDragToggleBg}
      onTouchStart={onDragToggleBg}
      onDragStart={onDragToggleBg}
      onDragEnd={onDragToggleBg}
    >
      <MobileModalContent>{children}</MobileModalContent>
    </MobileModalBackdrop>,
    mobileModalRoot
  );
};
