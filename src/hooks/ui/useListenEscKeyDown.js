import { useEffect } from 'react';

export const useListenEscKeyDown = onClose => {
  useEffect(() => {
    const closeOnEscapeKey = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeOnEscapeKey);
    return () => document.removeEventListener('keydown', closeOnEscapeKey);
  }, [onClose]);
};
