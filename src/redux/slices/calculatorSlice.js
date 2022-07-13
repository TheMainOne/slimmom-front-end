import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: { userInfo: null },
  reducers: {
    saveUserInfo(state, actions) {
      state.userInfo = actions.payload;
    },
  },
});

export const { saveUserInfo } = calculatorSlice.actions;
