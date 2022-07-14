import { useEffect, useState } from 'react';
import { useGetConsumedByDate } from './useGetConsumedByDate';
import { useGetUserNorma } from './useGetUserNorma';

const INITIAL_RES_DATA = {
  dailyData: {
    left: null,
    consumed: null,
    dailyRate: null,
    percente: null,
  },
  bannedProducts: {},
};

export const useDailyNorma = () => {
  const { dailyRate, bannedProducts } = useGetUserNorma();
  const { consumed, date } = useGetConsumedByDate();
  const [responseData, setResponseData] = useState(INITIAL_RES_DATA);

  useEffect(() => {
    const haveUserInfo = dailyRate && consumed >= 0;
    const left = haveUserInfo ? dailyRate - consumed : null;
    const percente = haveUserInfo ? (consumed * 100) / dailyRate : null;

    setResponseData({
      dailyData: { left, consumed, dailyRate, percente: Math.round(percente) },
      bannedProducts,
    });
  }, [dailyRate, bannedProducts, consumed]);

  return [responseData, date];
};
