const { createSlice } = require('@reduxjs/toolkit');

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    activeLang: 'ua',
  },
  reducers: {
    setCurrentLang: (state, action) => void (state.activeLang = action.payload),
  },
});

export const { setCurrentLang } = languageSlice.actions;

export const selectActiveLang = state => state.language.activeLang;
