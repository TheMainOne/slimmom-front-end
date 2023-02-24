import { createContext, useContext } from 'react';
import { useEffect, useMemo, useState } from 'react';

const TABLET = 768;
const DESKTOP = 1280;
const PRE_DESKTOP = DESKTOP - 1;

const tabletMQ = `(min-width: ${TABLET}px) and (max-width: ${PRE_DESKTOP}px)`;

export const makeMediaQueryList = query => window.matchMedia(query);
const isTabletMQ = makeMediaQueryList(tabletMQ);

/**
 * @param {boolean} matches
 * @returns {"tablet" | "mobile" | "desktop"} string
 */
const checkMedia = matches => {
  if (matches) return 'tablet';
  return window.innerWidth < TABLET ? 'mobile' : 'desktop';
};

const mediaInitState = {
  media: checkMedia(isTabletMQ.matches),
};

const initState = {
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: mediaInitState.media === 'mobile',
  isTablet: mediaInitState.media === 'tablet',
  isDesktop: mediaInitState.media === 'desktop',
};

const useResizeEffect = () => {
  const [{ width, height, isMobile, isTablet, isDesktop }, setMedia] =
    useState(initState);

  useEffect(() => {
    const updateIsTabletMQ = ({ matches }) => {
      const checked = checkMedia(matches);

      const newMedia = {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: checked === 'mobile',
        isTablet: checked === 'tablet',
        isDesktop: checked === 'desktop',
      };

      setMedia(newMedia);
    };

    isTabletMQ.addEventListener('change', updateIsTabletMQ, { passive: true });
    return () => {
      isTabletMQ.removeEventListener('change', updateIsTabletMQ);
    };
  }, []);

  return useMemo(
    () => ({
      width,
      height,
      isMobile,
      isTablet,
      isDesktop,
    }),
    [height, isDesktop, isMobile, isTablet, width]
  );
};

export const MediaContext = createContext(initState);

export const MediaContextProvider = ({ children }) => {
  const context = useResizeEffect();
  return (
    <MediaContext.Provider value={context}>{children}</MediaContext.Provider>
  );
};

export const useMedia = () => useContext(MediaContext);
