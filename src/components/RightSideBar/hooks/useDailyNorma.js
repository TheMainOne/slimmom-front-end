import { useEffect, useState } from 'react';
import { diaryApi } from 'redux/apis';
import { usePrivatDailyNormaQuery } from 'redux/apis/privatDailyNorma';

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
  const { data: dataDaily } = usePrivatDailyNormaQuery();
  const { data: dataTotal } = diaryApi.useGetProductsByDateQuery();

  const [responseData, setResponseData] = useState(INITIAL_RES_DATA);

  useEffect(() => {
    if (!dataDaily || !dataTotal) return;

    const dailyRate = dataDaily?.results?.dailyRate;
    const consumed = dataTotal?.data?.total;
    const haveUserInfo = dailyRate && consumed;
    const left = haveUserInfo ? dailyRate - consumed : null;
    const percente = haveUserInfo ? (consumed * 100) / dailyRate : null;

    setResponseData({
      dailyData: { left, consumed, dailyRate, percente: Math.round(percente) },
      bannedProducts: dataDaily.results.bannedProducts,
    });
  }, [dataDaily, dataTotal]);

  return [responseData];
};
