import { usePrivatDailyNormaQuery } from 'redux/apis/privatDailyNorma';

export const useGetUserNorma = () => {
  const { data: dataDaily } = usePrivatDailyNormaQuery();

  return {
    dailyRate: dataDaily?.results?.dailyRate,
    bannedProducts: dataDaily?.results?.bannedProducts,
  };
};
