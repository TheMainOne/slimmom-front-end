import { userNormaApi } from 'redux/apis';

export const useGetUserNorma = () => {
  const { data: dataDaily } = userNormaApi.useGetPrivatDailyNormaQuery();

  return {
    dailyRate: dataDaily?.results?.dailyRate,
    bannedProducts: dataDaily?.results?.bannedProducts,
  };
};
