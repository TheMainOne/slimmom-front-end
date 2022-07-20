import * as yup from 'yup';

export const validationSchema = yup.object({
  height: yup
    .number()
    .typeError('Height must be a number')
    .min(100, 'Height should be of min 100')
    .max(250, 'Height should be of max 250')
    .required('Height is required'),
  age: yup
    .number()
    .typeError('Age must be a number')
    .min(18, 'Age should be of min 18')
    .max(100, 'Age should be of max 100')
    .required('Age is required'),
  currentWeight: yup
    .number()
    .typeError('CurrentWeight must be a number')
    .min(20, 'CurrentWeight should be of min 20')
    .max(500, 'CurrentWeight should be of max 500')
    .required('CurrentWeight is required'),
  desiredWeight: yup
    .number()
    .typeError('DesiredWeight must be a number')
    .min(20, 'DesiredWeight should be of min 20')
    .max(500, 'DesiredWeight should be of max 500')
    .required('DesiredWeight is required'),
});
