import { useDispatch, useSelector } from 'react-redux';
import { selectActiveDate, setActiveDate } from 'redux/slices';
import { memo, useCallback, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { CalendarWrapper, IconCalendar } from './DiaryDateCalendar.styled';
import { isValidDate } from 'utils';
import { formatISO } from 'date-fns';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { DateInputStyled } from './DiaryDateCalendar.mui';

const MaterialUIPickers = () => {
  const dispatch = useDispatch();
  const dateFromRedux = useSelector(selectActiveDate);
  const [value, setValue] = useState(dateFromRedux);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [open, setOpen] = useState(false);
  const toggleCalendar = useCallback(() => setOpen(show => !show), []);

  useEffect(() => {
    const saveDateToRedux = () => {
      try {
        const isDate = isValidDate(value);
        if (!isDate) return;

        const stringDate = formatISO(value, { representation: 'date' });

        dispatch(setActiveDate(stringDate));
      } catch (error) {
        console.log(error);
      }
    };

    saveDateToRedux();
  }, [dispatch, value]);

  useEffect(() => {
    return () => {
      if (isLoggedIn) return;

      dispatch(
        setActiveDate(formatISO(new Date(), { representation: 'date' }))
      );
    };
  }, [dispatch, isLoggedIn]);

  return (
    <CalendarWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          inputFormat="dd.MM.yyyy"
          maxDate={new Date()}
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          open={open}
          onOpen={toggleCalendar}
          onClose={toggleCalendar}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <DateInputStyled
              ref={inputRef}
              {...inputProps}
              variant="standard"
              InputProps={{
                ...InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={toggleCalendar}>
                      <IconCalendar />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </LocalizationProvider>
    </CalendarWrapper>
  );
};

export const DateCalendar = () => {
  return (
    <>
      <MaterialUIPickers />
      <ul>{/* <li>36. Верстка мобілка, планшет, десктоп</li> */}</ul>
    </>
  );
};

export const DiaryDateCalendar = memo(DateCalendar);
