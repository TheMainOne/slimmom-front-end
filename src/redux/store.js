import { configureStore } from '@reduxjs/toolkit';
import { loaderReducer } from './slices';

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});
