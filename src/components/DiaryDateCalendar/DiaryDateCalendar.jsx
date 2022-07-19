import { useDispatch, useSelector } from 'react-redux';
import { selectActiveDate, setDate } from 'redux/slices';
import { formatISO } from 'date-fns';
import { memo, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import useResizeAware from 'react-resize-aware';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { CalendarWrapper, IconCalendar } from './DiaryDateCalendar.styled';

const DESKTOP_WIDTH_BREAKPOINT = 1280;

const MaterialUIPickers = () => {
  const dispatch = useDispatch();
  const activeDate = new Date(useSelector(selectActiveDate));
  const [localDate, setLocalDate] = useState(activeDate);
  const [open, setOpen] = useState(false);
  const toggleCalendar = () => setOpen(show => !show);

  const [resizeListener, { width }] = useResizeAware();
  const isTablet = width < DESKTOP_WIDTH_BREAKPOINT;
  const isDesktop = !isTablet;

  useEffect(() => {
    const data = formatISO(localDate, { representation: 'date' });
    dispatch(setDate(data));
  }, [localDate, dispatch]);

  return (
    <CalendarWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {resizeListener}

        {isDesktop && (
          <DesktopDatePicker
            inputFormat="dd.MM.yyyy"
            value={localDate}
            minDate="2000-00-00"
            maxDate="2200-12-31"
            onChange={setLocalDate}
            open={open}
            onOpen={toggleCalendar}
            onClose={toggleCalendar}
            renderInput={params => (
              <TextField
                variant="standard"
                {...params}
                InputProps={{
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
        )}

        {isTablet && (
          <MobileDatePicker
            inputFormat="dd.MM.yyyy"
            value={localDate}
            minDate="2000-00-00"
            maxDate="2200-12-31"
            onChange={setLocalDate}
            open={open}
            onOpen={toggleCalendar}
            onClose={toggleCalendar}
            closeOnSelect={true}
            renderInput={params => (
              <TextField
                variant="standard"
                {...params}
                InputProps={{
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
        )}
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
