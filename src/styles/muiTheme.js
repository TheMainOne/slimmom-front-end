import { createTheme } from '@mui/material';

const VERDANA = `'Verdana', sans-serif`;
const VERDANA_BOLD = `'Verdana Bold', sans-serif`;
const GOTHAM_PRO = `'Gotham Pro', sans-serif`;

export const muiTheme = createTheme({
  fonts: {
    verdana: VERDANA,
    verdanaBold: VERDANA_BOLD,
    gothamPro: GOTHAM_PRO,
  },

  lineHeight: {
    verdanaHeight: '1.2',
    gothamProHeight: '0.9',
    pageTitleHeight: '1.4',
  },

  colors: {
    $white: '#FFFFFF',
    $orange: '#FC842D',
    $darkOrange: '#e76000',
    $blue: '#264061',
    $lightGrey: '#F0F1F3',
    $grey: '#9B9FAA',
    $black: '#212121',
    $transparentGrey: 'rgba(33, 33, 33, 0.12)',
    borderColor: '#E0E0E0',
  },
  spacing: value => `${4 * value}px`,

  options: {
    radius: '30px',
    buttonShadow: `0px 4px 10px rgba(252, 132, 45, 0.5)`,
    dropShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    cubic: 'cubic-bezier(0.4, 0, 0.2, 1)',
    gradient:
      ' linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 42.19%)',
    muiBtnShadow: `0 5px 5px -3px rgb(0, 0, 0, 0.2), 0 8px 10px 1px rgb(0, 0, 0, 0.14),
      0 3px 14px 2px rgb(0, 0, 0, 0.12)`,
    time: '250ms',
  },

  breakpoints: {
    desktop: '1280px',
    tablet: '768px',
    mobile: '320px',
  },
});
