import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translationEN.json';
import translationUA from './locales/ua/translationUA.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ua: {
    translation: translationUA,
  },
};

const options = {
  order: [
    'cookie',
    'querystring',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],

  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],

  cookieMinutes: 10,
  cookieDomain: 'myDomain',

  htmlTag: document.documentElement,

  cookieOptions: { path: '/', sameSite: 'strict' },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'ua',
    fallbackLng: 'ua',
    detection: options,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
