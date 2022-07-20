import { useListenEscKeyDown, useToggleNoScroll } from 'hooks/ui';
import { useCallback, useEffect, useState } from 'react';
import { MobileModalContent, MobileModalBackdrop } from './MobileModal.styled';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Portal } from '@mui/material';

export const MobileModal = ({ hideMobileModal, showMobileModal, children }) => {
  useToggleNoScroll();
  const [isMounted, setIsMounted] = useState(false);
  useListenEscKeyDown(hideMobileModal, setIsMounted);
  const [open, setOpen] = useState(false);
  const openPortal = useCallback(() => setOpen(prev => !prev), []);

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
        <button type="button" onClick={openPortal}>
          Open menu dropdown
        </button>

        {open ? (
          <Portal>
            <MobileModalBackdrop className={className}>
              <MobileModalContent>{children}</MobileModalContent>
            </MobileModalBackdrop>

            <div>Click me, I will stay visible until you click outside.</div>
          </Portal>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};
