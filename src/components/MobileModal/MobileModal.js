import { useListenEscKeyDown, useToggleNoScroll } from 'hooks/ui';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { getRefs } from 'utils';
import { MobileModalContent, MobileModalBackdrop } from './MobileModal.styled';
const { mobileModalRoot } = getRefs();

export const MobileModal = ({ toggleModal, children }) => {
  const modalRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useToggleNoScroll();
  useListenEscKeyDown(toggleModal, setIsMounted);

  useEffect(() => {
    const callback = e => {
      if (!modalRef.current) return;
      if (!e.target || !(e.target instanceof Node)) return;
      if (modalRef.current.contains(e.target)) return;

      toggleModal();
    };

    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, [toggleModal]);

  if (!mobileModalRoot) {
    return <div>{`Add <div id="mobile-modal-root"></div> to index.html`}</div>;
  }

  const className = isMounted ? '' : 'isHidden';

  return createPortal(
    <MobileModalBackdrop className={className} ref={modalRef}>
      <MobileModalContent>{children}</MobileModalContent>
    </MobileModalBackdrop>,
    mobileModalRoot
  );
};
