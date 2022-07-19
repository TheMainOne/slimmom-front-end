import { useEffect } from 'react';
import { getScrollWidth } from 'utils';
const { documentElement, body } = document;

let isModalOpen = false;
const toggleNoScroll = () => {
  isModalOpen = !isModalOpen;
  const scrollWidth = getScrollWidth(body);
  documentElement.style.overflowY = isModalOpen ? 'hidden' : 'auto';
  documentElement.style.paddingRight = scrollWidth + 'px';
};

export const useToggleNoScroll = () => {
  useEffect(() => {
    toggleNoScroll();
    return toggleNoScroll;
  }, []);
};
