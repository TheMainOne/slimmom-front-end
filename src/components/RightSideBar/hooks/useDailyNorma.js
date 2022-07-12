import axios from 'axios';
import { useEffect, useState } from 'react';

const body = {
  currentWeight: 55,
  height: 160,
  age: 25,
  desiredWeight: 50,
  bloodType: 1,
};

export const useDailyNorma = () => {
  // const [isLoading, setIsLoading] = useState(false);
  const [dailyRate, setDailyRate] = useState('');
  const [bannedProducts, setBannedProducts] = useState([]);

  useEffect(() => {
    const func = async () => {
      // setIsLoading(true);

      try {
        const res = await axios.post('/api/users/daily-norma', body);
        const result = await res.data.results;

        setDailyRate(result.dailyRate);
        setBannedProducts(result.bannedProducts);
        // setIsLoading(false);
      } catch (error) {
        throw new Error(error);
      }
    };
    func();
  }, []);

  return [
    // isLoading,
    dailyRate,
    bannedProducts,
  ];
};

// 3група
// зерновые: 41    \\ 299
// масла и жиры: 2  \\69
// мучные: 345  \\ 375
// овощи и зелень: 19  \\ 431
// орехи: 4  \\  32

// 4группа
// зерновые: 35
// мучные: 342
// мясо: 152  \\ 307
// овощи и зелень: 39
// орехи: 32

// 2група :
// молочные: 292  \\ 292
// мучные: 334
// мясо: 152

// 1група:
// зерновые: 299
// молочные: 292
// мучные: 375
// яйца: 23
