import { useTranslation } from 'react-i18next';
const { useEffect } = require('react');
const { useLocation } = require('react-router-dom');

export const routesNames = {
  '/': '/',
  '/signup': '/signup',
  '/login': '/login',
  '/calculator': '/calculator',
  '/diary': '/diary',
};

export const useSetDocumentTitle = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    const ROUTES = {
      '/': 'SlimMom',
      '/signup': t('routes.signup'),
      '/login': t('routes.login'),
      '/calculator': t('routes.calculator'),
      '/diary': t('routes.diary'),
    };
    if (!ROUTES[pathname]) return;

    document.title = t(ROUTES[pathname]);
  }, [pathname, t]);
};
