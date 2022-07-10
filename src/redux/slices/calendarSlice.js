import { createSlice } from '@reduxjs/toolkit';
const { parse } = JSON;

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    activeDate: JSON.stringify(new Date()),
  },
  reducers: {
    setDate: (state, action) => void (state.activeDate = action.payload),
  },
});

export const { setDate } = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;

export const selectActiveDate = state =>
  new Date(parse(state.calendar.activeDate));
