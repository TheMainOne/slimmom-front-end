const getIsLoggedIn = state => state.auth.isLoggedIn;
const getName = state => state.auth.user.name;
const getEmail = state => state.auth.user.email;
const getFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getName,
    getEmail,
    getFetchingCurrentUser,
  };
  
  export default authSelectors;