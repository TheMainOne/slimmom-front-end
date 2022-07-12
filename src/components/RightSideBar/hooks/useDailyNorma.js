import axios from 'axios';
import { useEffect, useState } from 'react';

const body = {
  currentWeight: 55,
  height: 160,
  age: 25,
  desiredWeight: 50,
  bloodType: 3,
};

export const useDailyNorma = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dailyRate, setDailyRate] = useState('');
  const [bannedProducts, setBannedProducts] = useState([]);

  useEffect(() => {
    const func = async () => {
      setIsLoading(true);

      try {
        const res = await axios.post('/api/users/daily-norma', body);
        const result = await res.data.results;

        setDailyRate(result.dailyRate);
        setBannedProducts(result.bannedProducts);
        setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    };
    func();
  }, []);

  return [isLoading, dailyRate, bannedProducts];
};
