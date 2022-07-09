import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { loaderReducer } from './slices';
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

const persistorConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistorConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
