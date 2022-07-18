const { useEffect } = require('react');
const { useLocation } = require('react-router-dom');

const routes = {
  '/': 'SlimMom',
  '/signup': 'SignUp | SlimMom',
  '/login': 'Login | SlimMom',
  '/calculator': 'Calculator | SlimMom',
  '/diary': 'Diary | SlimMom',
};

const t = string => {
  const translated = string; // TODO: add translation with i18next
  return translated;
};

export const useSetDocumentTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!routes[pathname]) return;

    document.title = t(routes[pathname]);
  }, [pathname]);
};
