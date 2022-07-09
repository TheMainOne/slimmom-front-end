import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    showLoader: true,
  },
  reducers: {
    showSpinner: state => void (state.showLoader = true),
    hideSpinner: state => void (state.showLoader = false),
  },
});

export const { showSpinner, hideSpinner } = loaderSlice.actions;

export const loaderReducer = loaderSlice.reducer;

export const selectShowLoader = state => state.loader.showLoader;
