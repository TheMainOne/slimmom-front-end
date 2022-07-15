import { object, string, number, date } from 'yup';
import { formatISO } from 'date-fns';

export const addProductSchema = object({
  weight: number()
    .min(1, 'min 1 gram')
    .max(10000, 'max 10,000 grams')
    .positive('expects positive number')
    .integer('expects integer (no dot)')
    .required('Weight required'),
  id: string()
    .min(1, 'id min 1 char')
    .max(1024, 'id max 1024 char')
    .required('Product id (name) required'),
  date: date()
    .min(new Date(2000, 0, 1), 'min 2020 year')
    .default(() => formatISO(new Date(), { representation: 'date' })),
});
