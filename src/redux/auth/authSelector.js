export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getName = state => state.auth.user?.name;
export const getEmail = state => state.auth.user?.email;
export const getFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
export const getUser = state => state.auth.user;
export const getToken = state => state.auth.token;

const authSelectors = {
  getIsLoggedIn,
  getName,
  getEmail,
  getFetchingCurrentUser,
};
export default authSelectors;
