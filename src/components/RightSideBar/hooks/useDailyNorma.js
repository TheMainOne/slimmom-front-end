import { useEffect, useState } from 'react';
import { usePrivatDailyNormaQuery } from 'redux/apis/privatDailyNorma';

// const body = {
//   currentWeight: 55,
//   height: 160,
//   age: 25,
//   desiredWeight: 50,
//   bloodType: 3,
// };
const INITIAL_RES_DATA = {
  dailyData: {},
  bannedProducts: {},
};

export const useDailyNorma = () => {
  const { data } = usePrivatDailyNormaQuery();
  const [responseData, setResponseData] = useState(INITIAL_RES_DATA);

  useEffect(() => {
    if (!data) return;

    const composeData = ({ dailyRate }) => {
      return {
        left: null,
        consumed: null,
        dailyRate,
        percente: null,
      };
    };

    setResponseData({
      dailyData: composeData(data.results),
      bannedProducts: data.results.bannedProducts,
    });
  }, [data]);

  return [responseData];
};
