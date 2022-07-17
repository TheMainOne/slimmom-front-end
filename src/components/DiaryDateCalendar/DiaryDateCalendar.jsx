import { useDispatch, useSelector } from 'react-redux';
import { selectActiveDate, setDate } from 'redux/slices';
import { formatISO } from 'date-fns';
import { memo, useCallback, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import useResizeAware from 'react-resize-aware';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const DESKTOP_WIDTH_BREAKPOINT = 1280;

const MaterialUIPickers = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const activeDate = new Date(useSelector(selectActiveDate));
  const [localDate, setLocalDate] = useState(activeDate);

  const selectDate = useCallback(date => {
    setLocalDate(date);
  }, []);

  const [resizeListener, { width }] = useResizeAware();
  const isTablet = width < DESKTOP_WIDTH_BREAKPOINT;
  const isDesktop = !isTablet;

  useEffect(() => {
    const data = formatISO(localDate, { representation: 'date' });
    dispatch(setDate(data));
  }, [localDate, dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {resizeListener}

      {isDesktop && (
        <DesktopDatePicker
          label={t('date')}
          inputFormat="dd.MM.yyyy"
          value={localDate}
          onChange={selectDate}
          renderInput={params => <TextField {...params} />}
        />
      )}

      {isTablet && (
        <MobileDatePicker
          label={t('dateM')}
          inputFormat="dd.MM.yyyy"
          value={localDate}
          onChange={selectDate}
          renderInput={params => <TextField {...params} />}
        />
      )}
    </LocalizationProvider>
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
