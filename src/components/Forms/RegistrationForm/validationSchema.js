import * as yup from 'yup';

export const validationSchema = () => {
  return yup.object({
    name: yup
      .string('Enter your name')
      .min(3, 'Name should be of min 3 characters length')
      .max(254, 'Name should be of max 254 characters length')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .min(3, 'Email should be of min 3 characters length')
      .max(254, 'Email should be of max 254 characters length')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of min 8 characters length')
      .max(100, 'Password should be of max 100 characters length')
      .matches(
        /^[a-zA-Z0-9]+/,
        'Password must contain Latin letters and/or numbers.'
      )
      .required('Password is required'),
  });
};
