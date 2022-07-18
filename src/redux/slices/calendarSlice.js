import { createSlice } from '@reduxjs/toolkit';
import { formatISO, parseISO } from 'date-fns';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    activeDate: formatISO(new Date(), { representation: 'date' }),
    showMobileModal: false,
  },
  reducers: {
    setDate: (state, action) => void (state.activeDate = action.payload),
    toggleMobileModal: state =>
      void (state.showMobileModal = !state.showMobileModal),
  },
});

export const { setDate, toggleMobileModal } = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;

export const selectActiveDate = state => parseISO(state.calendar.activeDate);
export const selectShowMobileModal = state => state.calendar.showMobileModal;
