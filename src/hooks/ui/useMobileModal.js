import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowMobileModal, toggleMobileModal } from 'redux/slices';

export const useShowModal = () => {
  const showMobileModal = useSelector(selectShowMobileModal);
  // console.log({ showMobileModal });
  const dispatch = useDispatch();

  const toggleModal = useCallback(
    () => dispatch(toggleMobileModal()),
    [dispatch]
  );

  return useMemo(
    () => [showMobileModal, toggleModal],
    [showMobileModal, toggleModal]
  );
};
