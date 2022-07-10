import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { InputAdornment, IconButton, TextField } from '@material-ui/core';
// import {  CastomTextField } from './Mui';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { logIn } from '../../redux/auth/auth_operations';
// import routes from '../../routes';
// import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Form, ButtonContainer, ButtonLogin, Container } from './LoginForm.styled';

const useStyles = makeStyles({
  input: {
    width: 289,
    '@media (min-width: 768px)': {
      width: 240,
    },
  },
  loginInput: {
    marginBottom: 40,
  },
  passwordInput: {
    marginBottom: 60,
  },
});

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
  const [showPassword, setShowPassword ] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const classes = useStyles();
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
      // const payload = {
      //   logIn: values.logIn,
      //   password: values.password,
      // };

      // dispatch(login(payload));
      resetForm({ values: '' });
    },
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
         <TextField
             styles={{ color: 'blue' }}
             className={`${classes.input} ${classes.loginInput}`}
             id="login"
             name="login"
             placeholder="Логин *"
             value={formik.values.login}
             onChange={formik.handleChange}
             error={formik.touched.login && Boolean(formik.errors.login)}
             helperText={formik.touched.login && formik.errors.login}
        />
        <TextField
          className={`${classes.input} ${classes.passwordInput}`}
          styles={{ color: 'blue' }}
          id="password"
          name="password"
          placeholder="Пароль *"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

       <ButtonContainer>
          <ButtonLogin 
          color="primary" 
          variant="contained"  
          type="submit"  
          disabled={formik.isSubmitting || !formik.dirty}>
           Login
        </ButtonLogin>
         
          {/* <NavLink to={routes.registration}> */}
            
            <ButtonLogin 
            color="primary" 
            variant="contained"  
            type="submit" 
            disabled={!formik.isValid}>
           Register
        </ButtonLogin>
           
          {/* </NavLink> */}
        </ButtonContainer>
      </Form>
   </Container>
  );
};

export default LoginForm;