import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShowMobileModal, toggleMobileModalAction } from 'redux/slices';

export const useShowModal = () => {
  const showMobileModal = useSelector(selectShowMobileModal);
  const dispatch = useDispatch();

  const toggleMobileModal = useCallback(
    () => dispatch(toggleMobileModalAction()),
    [dispatch]
  );

  return useMemo(
    () => [showMobileModal, toggleMobileModal],
    [showMobileModal, toggleMobileModal]
  );
};
