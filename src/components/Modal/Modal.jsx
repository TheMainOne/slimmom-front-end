import { useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Background, ModalWrapper } from './Modal.styled';
import { useToggleNoScroll } from 'hooks/ui';
import { getRefs } from 'utils';
import { useListenEscKeyDown } from 'hooks/ui';

const { modalRoot } = getRefs();

export const Modal = ({ showModal, setShowModal, children }) => {
  useToggleNoScroll();

  const modalRef = useRef();

  const closeModal = useCallback(
    e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  const onEscCloseModal = useCallback(
    () => setShowModal(false),
    [setShowModal]
  );

  useListenEscKeyDown(onEscCloseModal);

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
