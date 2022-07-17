import { useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Background, ModalWrapper } from './Modal.styled';
import { useToggleNoScroll } from 'hooks/ui';
import { getRefs } from 'utils';

const { modalRoot } = getRefs();

export const Modal = ({ showModal, setShowModal, children }) => {
  useToggleNoScroll();

  const modalRef = useRef();

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const closeOnEscapeKey = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeOnEscapeKey);
    return () => document.removeEventListener('keydown', closeOnEscapeKey);
  }, [closeOnEscapeKey]);
  return createPortal(
    <>
      {showModal && (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper showModal={showModal}>{children}</ModalWrapper>
        </Background>
      )}
    </>,
    modalRoot
  );
};
