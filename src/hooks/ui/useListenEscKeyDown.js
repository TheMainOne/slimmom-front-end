import { useEffect } from 'react';

export const useListenEscKeyDown = (onClose, setIsMounted) => {
  useEffect(() => {
    const closeOnEscapeKey = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeOnEscapeKey, { passive: true });
    typeof setIsMounted === 'function' && setIsMounted(true);

    return () => document.removeEventListener('keydown', closeOnEscapeKey);
  }, [onClose, setIsMounted]);
};
