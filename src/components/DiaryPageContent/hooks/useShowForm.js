import { isSameDay } from 'date-fns';

export const useShowForm = (currentDate = new Date()) => {
  const selectedDate = new Date(currentDate).getTime();
  const today = new Date().getTime();
  const showForm = selectedDate > today || isSameDay(selectedDate, today);
  return showForm;
};
