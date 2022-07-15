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
import { memo, useState } from 'react';

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const MaterialUIPickers = () => {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {desktop && (
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={params => <TextField {...params} />}
        />
      )}

      {tablet && (
        <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={params => <TextField {...params} />}
        />
      )}
    </LocalizationProvider>
  );
};

export const DateCalendar = () => {
  const dispatch = useDispatch();
  const activeDate = useSelector(selectActiveDate);
  const selectDate = date => {
    const data = formatISO(date, { representation: 'date' });
    console.log(data);

    dispatch(setDate(data));
  };

  return (
    <>
      <CalendarWrapper>
        <DatePicker
          selected={activeDate}
          onChange={selectDate}
          dateFormat="dd.MM.yyyy"
          customInput={<DateInputStyled maxLength="10" />}
        />
        <IconCalendar />
      </CalendarWrapper>

      <MaterialUIPickers />

      <ul>{/* <li>36. Верстка мобілка, планшет, десктоп</li> */}</ul>
    </>
  );
};

export const DiaryDateCalendar = memo(DateCalendar);
