const { useEffect } = require('react');
const { useLocation } = require('react-router-dom');

export const ROUTES = {
  '/': 'SlimMom',
  '/signup': 'SignUp | SlimMom',
  '/login': 'Login | SlimMom',
  '/calculator': 'Calculator | SlimMom',
  '/diary': 'Diary | SlimMom',
};

export const routesNames = {
  '/': '/',
  '/signup': '/signup',
  '/login': '/login',
  '/calculator': '/calculator',
  '/diary': '/diary',
};

const t = string => {
  const translated = string; // TODO: add translation with i18next
  return translated;
};

export const useSetDocumentTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!ROUTES[pathname]) return;

    document.title = t(ROUTES[pathname]);
  }, [pathname]);
};
