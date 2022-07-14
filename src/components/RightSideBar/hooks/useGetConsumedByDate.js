import { useSelector } from 'react-redux';
import { diaryApi } from 'redux/apis';
import { formatingDate } from './formatingDate';

export const useGetConsumedByDate = () => {
  const date = useSelector(state => state.calendar.activeDate);

  const { data: dataTotal } = diaryApi.useGetProductsByDateQuery(
    formatingDate.yyMmDd(date)
  );

  return { consumed: dataTotal?.data?.total, date: formatingDate.mmDdYy(date) };
};
