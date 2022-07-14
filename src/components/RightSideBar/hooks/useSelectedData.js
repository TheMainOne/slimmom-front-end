import { parseISO, format } from 'date-fns';
import { useSelector } from 'react-redux';

export const useSelectedData = () => {
  const count = useSelector(state => state.calendar.activeDate);
  const date = format(parseISO(count), 'MM/dd/yyyy');

  return [date];
};
