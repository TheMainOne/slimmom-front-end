import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { selectActiveDate, setDate } from 'redux/slices';
import 'react-datepicker/dist/react-datepicker.css';
const { stringify } = JSON;

export const DiaryDateCalendar = () => {
  const dispatch = useDispatch();
  const activeDate = useSelector(selectActiveDate);
  w;

  return (
    <div>
      <DatePicker selected={activeDate} onChange={selectDate} />

      <ul>{/* <li>36. Верстка мобілка, планшет, десктоп</li> */}</ul>
    </div>
  );
};
