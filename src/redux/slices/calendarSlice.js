import { createSlice } from '@reduxjs/toolkit';
import { formatISO, parseISO } from 'date-fns';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    activeDate: formatISO(new Date(), { representation: 'date' }),
  },
  reducers: {
    setDate: (state, action) => void (state.activeDate = action.payload),
  },
});

export const { setDate } = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;

export const selectActiveDate = state => parseISO(state.calendar.activeDate);
