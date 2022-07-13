import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { selectActiveDate, setDate } from 'redux/slices';
import 'react-datepicker/dist/react-datepicker.css';
import { formatISO } from 'date-fns';
import {
  CalendarWrapper,
  DateInputStyled,
  IconCalendar,
} from './DiaryDateCalendar.styled';

export const DiaryDateCalendar = () => {
  const dispatch = useDispatch();
  const activeDate = useSelector(selectActiveDate);
  const selectDate = date =>
    dispatch(setDate(formatISO(date, { representation: 'date' })));

  return (
    <div>
      <CalendarWrapper>
        <DatePicker
          selected={activeDate}
          onChange={selectDate}
          dateFormat="dd.MM.yyyy"
          customInput={<DateInputStyled maxLength="10" />}
        />
        <IconCalendar />
      </CalendarWrapper>

      <ul>{/* <li>36. Верстка мобілка, планшет, десктоп</li> */}</ul>
    </div>
  );
};
