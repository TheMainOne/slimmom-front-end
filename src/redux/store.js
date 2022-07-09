import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from './auth/authSlice';
import { loaderReducer } from './slices';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    // auth: authSlice.reducer,
  },
});
