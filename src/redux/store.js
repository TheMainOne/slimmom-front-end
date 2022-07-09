import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './apis/baseApi';
import { calendarReducer, loaderReducer } from './slices';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    loader: loaderReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: gDM => gDM().concat(baseApi.middleware),
});
