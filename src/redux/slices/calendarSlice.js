import { createSlice } from '@reduxjs/toolkit';
import { formatISO, parseISO } from 'date-fns';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    activeDate: formatISO(new Date().getTime(), { representation: 'date' }),
    showMobileModal: false,
  },
  reducers: {
    setActiveDate: (state, action) => void (state.activeDate = action.payload),
    displayMobileModal: state => void (state.showMobileModal = true),
    closeMobileModal: state => void (state.showMobileModal = false),
  },
});

export const { setActiveDate, displayMobileModal, closeMobileModal } =
  calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;

export const selectActiveDate = state => parseISO(state.calendar.activeDate);
export const selectShowMobileModal = state => state.calendar.showMobileModal;
