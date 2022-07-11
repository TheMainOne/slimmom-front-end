// - Если маршрут приватный и пользователь залогинен, рендерит компонент
// - В противном случае рендерит Redirect на указанный роут

// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsAuthenticated } from '../redux/auth/auth_selector';

// // Компонент приватного роута (перед внедрением подогнать под наш стейт!)
// const PrivateRoute = ({ redirectTo, children, ...routeProps }) => {
//   const isLoggedIn = useSelector(getIsAuthenticated); // Селектор статуса аутентификации

//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// };

// export default PrivateRoute;