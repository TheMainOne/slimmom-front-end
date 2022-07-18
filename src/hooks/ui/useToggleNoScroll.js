import { useEffect } from 'react';
import { getScrollWidth } from 'utils';

let isOpen = false;

const toggleNoScroll = () => {
  document.body.style.paddingRight = isOpen
    ? '-' + getScrollWidth(document.body) + 'px'
    : '';

  isOpen = !isOpen;
};

export const useToggleNoScroll = () => {
  useEffect(() => {
    toggleNoScroll();
    return toggleNoScroll;
  }, []);
};
