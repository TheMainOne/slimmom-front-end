export const transformUserData = userParams => {
  const userData = {};
  if (userParams?.age) {
    Object.keys(userParams).forEach(
      param => (userData[param] = Number(userParams[param]))
    );
  }
  return userData;
};
