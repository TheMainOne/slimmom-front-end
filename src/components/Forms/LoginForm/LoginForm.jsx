import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {  CastomTextField } from './Mui';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { ButtonLogin } from './Mui';
import { Form } from './LoginForm.styled';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of min 8 characters length')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
      const payload = {
        email: values.email,
        password: values.password,
      };

      dispatch(logIn(payload));
      resetForm({ values: '' });
    },
  });

  return (
    <div>
    <Form onSubmit={formik.handleSubmit}>
      <CastomTextField
        variant="standard"
        id="email"
        name="email"
        label="Email *"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <CastomTextField
        variant="standard"
        id="password"
        name="password"
        label="Password *"
        type="password"
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      
          <ButtonLogin 
          color="primary" 
          variant="contained"  
          type="submit"  
          >
           Login
        </ButtonLogin>
      
               
      </Form>

    </div>
    
     );
};

export default LoginForm;