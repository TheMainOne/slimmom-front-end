import axios from 'axios';
import { useEffect, useState } from 'react';
const DAILY_NORMA_URL = '/api/users/daily-norma';

const body = {
  currentWeight: 55,
  height: 160,
  age: 25,
  desiredWeight: 50,
  bloodType: 3,
};

export const useDailyNorma = () => {
  const [dailyRate, setDailyRate] = useState('');
  const [bannedProducts, setBannedProducts] = useState('');

  useEffect(() => {
    const func = async () => {
      try {
        const { data } = await axios.post(DAILY_NORMA_URL, body);
        setDailyRate(data.results.dailyRate);
        setBannedProducts(data.results.bannedProducts);
      } catch (error) {
        throw new Error(error);
      }
    };

    func();
  }, []);

  return [dailyRate, bannedProducts];
};
