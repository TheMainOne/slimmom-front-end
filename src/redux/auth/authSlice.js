import { register, logIn, logOut, fetchCurrentUser } from './authOperations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null, userData: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.user.userData = action.payload;
    },
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
