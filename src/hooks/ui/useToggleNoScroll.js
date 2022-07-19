import { useEffect } from 'react';
import { getScrollWidth } from 'utils';

let isOpen = false;

const toggleNoScroll = () => {
  isOpen = !isOpen;

  document.body.style.paddingRight = isOpen
    ? '-' + getScrollWidth(document.body) + 'px'
    : '';

  if (isOpen) {
    document.documentElement.classList.add('overflow-hidden');
  } else {
    document.documentElement.classList.remove('overflow-hidden');
  }
};

export const useToggleNoScroll = () => {
  useEffect(() => {
    toggleNoScroll();
    return toggleNoScroll;
  }, []);
};
