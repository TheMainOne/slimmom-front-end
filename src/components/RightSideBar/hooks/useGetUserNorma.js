import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userNormaApi } from 'redux/apis';
import { getUserData } from 'redux/auth/authSelector';

export const useGetUserNorma = () => {
  const [triger, { data, isLoading }] =
    userNormaApi.useGetPrivateDailyNormaMutation();
  const userInfo = useSelector(getUserData);

  console.log('~ isLoading useGetUserNorma', isLoading);

  useEffect(() => {
    if (!userInfo) return;
    const { currentWeight, height, age, desiredWeight, bloodType } = userInfo;

    const newData = {
      currentWeight,
      height,
      age,
      desiredWeight,
      bloodType,
    };

    triger(newData);
  }, [triger, userInfo]);

  return {
    userDailyRate: data?.results?.dailyRate,
    products: data?.results?.bannedProducts,
    isLoadingNorma: isLoading,
  };
};
