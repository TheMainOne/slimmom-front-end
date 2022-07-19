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

export const useDailyNorma = userData => {
  const [responseData, setResponseData] = useState(INITIAL_RES_DATA);
  const { consumed, date, isLoadingConsumed } = useGetConsumedByDate();
  const { userDailyRate, products, isLoadingNorma } = useGetUserNorma();
  const isLoading = isLoadingConsumed || isLoadingNorma;

  useEffect(() => {
    const dailyRate = userData?.results?.dailyRate || userDailyRate;
    const bannedProducts = userData?.results?.bannedProducts || products;

    const haveUserInfo = dailyRate && consumed >= 0;
    const left = haveUserInfo ? dailyRate - consumed : null;
    const percente = haveUserInfo ? (consumed * 100) / dailyRate : null;

    setResponseData({
      dailyData: { left, consumed, dailyRate, percente: Math.round(percente) },
      bannedProducts,
    });
  }, [consumed, products, userDailyRate, userData]);

  return [responseData, date, isLoading];
};
