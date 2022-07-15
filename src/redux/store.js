import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './apis/baseApi';
import { diaryApi } from './apis/diaryApi';
import { calculatorSlice, calendarReducer } from './slices';
import { authSlice } from './auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const userInfoConfig = {
  key: 'userInfo',
  storage: storage,
};

const authReducer = persistReducer(authConfig, authSlice.reducer);

const calculatorReducer = persistReducer(
  userInfoConfig,
  calculatorSlice.reducer
);

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    userInfo: calculatorReducer,
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    diaryApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
