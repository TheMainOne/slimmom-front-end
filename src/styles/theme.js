const VERDANA = `'Verdana', sans-serif`;
const GOTHAM_PRO = `'Gotham Pro', sans-serif`;

export const theme = {
  fonts: {
    verdana: VERDANA,
    gothamPro: GOTHAM_PRO,
  },

  lineHeight: {
    verdanaHeight: '1.2',
    gothamProHeight: '0.9',
  },

  colors: {
    $white: '#FFFFFF',
    $orange: '#FC842D',
    $blue: '#264061',
    $lightGrey: '#F0F1F3',
    $grey: '#9B9FAA',
    $black: '#212121',
    borderColor: '#E0E0E0',
  },
  spacing: value => `${4 * value}px`,

  options: {
    radius: '30px',
    buttonShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
    dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    gradient:
      ' linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 42.19%)',
  },

  breakpoints: {
    desktop: '1280px',
    tablet: '768px',
    mobile: '320px',
  },
};
