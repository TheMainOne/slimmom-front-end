import { useListenEscKeyDown, useToggleNoScroll } from 'hooks/ui';
import { useCallback, useEffect, useState } from 'react';
import { MobileModalContent, MobileModalBackdrop } from './MobileModal.styled';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Portal } from '@mui/material';

export const MobileModal = ({ hideMobileModal, children }) => {
  useToggleNoScroll();
  const [isMounted, setIsMounted] = useState(false);
  useListenEscKeyDown(hideMobileModal, setIsMounted);
  const [open, setOpen] = useState(false);

  const handleClickAway = useCallback(() => {
    hideMobileModal();
    setOpen(false);
  }, [hideMobileModal]);

  useEffect(() => setOpen(true), []);
  useEffect(() => handleClickAway, [handleClickAway]);

  const className = isMounted ? '' : 'isHidden';

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        {open ? (
          <Portal>
            <MobileModalBackdrop className={className}>
              <MobileModalContent>{children}</MobileModalContent>
            </MobileModalBackdrop>
          </Portal>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};
