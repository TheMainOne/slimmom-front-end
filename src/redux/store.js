import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './apis/baseApi';
import { diaryApi } from './apis/diaryApi';
import { calendarReducer } from './slices';
import { authSlice } from './auth/authSlice';
import { languageSlice } from './slices/languageSlice';
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
  whitelist: ['token', 'language'],
};

const langConfig = {
  key: 'language',
  storage: storage,
  whitelist: ['language'],
};

const authReducer = persistReducer(authConfig, authSlice.reducer);
const languageReducer = persistReducer(langConfig, languageSlice.reducer);

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    auth: authReducer,
    language: languageReducer,
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
