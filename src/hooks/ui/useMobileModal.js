import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowMobileModal, toggleMobileModal } from 'redux/slices';
import { getRefs } from 'utils';

const { html } = getRefs();
const overflowHidden = 'overflow-hidden';

export const useShowModal = () => {
  const showMobileModal = useSelector(selectShowMobileModal);
  console.log({ showMobileModal });
  const dispatch = useDispatch();

  html.classList.toggle(overflowHidden);

  const toggleModal = useCallback(
    () => dispatch(toggleMobileModal()),
    [dispatch]
  );

  return useMemo(
    () => [showMobileModal, toggleModal],
    [showMobileModal, toggleModal]
  );
};
