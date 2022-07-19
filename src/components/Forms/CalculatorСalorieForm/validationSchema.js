import * as yup from 'yup';

export const validationSchema = yup.object({
  height: yup
    .number('Height it is number')
    .min(100, 'Height should be of min 100')
    .max(250, 'Height should be of max 250')
    .required('Height is required'),
  age: yup
    .number('Age it is number')
    .min(18, 'Age should be of min 18')
    .max(100, 'Age should be of max 100')
    .required('Age is required'),
  currentWeight: yup
    .number('CurrentWeight it is number')
    .min(20, 'CurrentWeight should be of min 20')
    .max(500, 'CurrentWeight should be of max 500')
    .required('CurrentWeight is required'),
  desiredWeight: yup
    .number('DesiredWeight it is number')
    .min(20, 'DesiredWeight should be of min 20')
    .max(500, 'DesiredWeight should be of max 500')
    .required('DesiredWeight is required'),
});
