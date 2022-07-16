import * as yup from 'yup';

export const validationSchema = yup.object({
  height: yup
    .number('Height it is number')
    .min(100, 'Height should be of min 100')
    .max(300, 'Height should be of max 300')
    .required('Height is required'),
  age: yup
    .number('Age it is number')
    .min(16, 'CurrentWeight should be of min 16')
    .max(130, 'Height should be of max 130')
    .required('Age is required'),
  currentWeight: yup
    .number('CurrentWeight it is number')
    .min(30, 'CurrentWeight should be of min 30')
    .max(500, 'Height should be of max 500')
    .required('CurrentWeight is required'),
  desiredWeight: yup
    .number('DesiredWeight it is number')
    .min(30, 'CurrentWeight should be of min 30')
    .max(500, 'Height should be of max 500')
    .required('DesiredWeight is required'),
});
