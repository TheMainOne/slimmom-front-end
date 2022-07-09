import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {InputAdornment, IconButton } from '@material-ui/core';
import { ButtonRegister, CastomTextField } from './Mui';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { logIn } from '../../redux/auth/auth_operations';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './LoginForm.styled';

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
  login: yup.string('Введите ваш login').required('login обязательный'),
  password: yup
    .string('Введите пароль')
    .min(6, 'Пароль должен быть длинее 6 символов')
    .required('Пароль обязательный'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const classes = useStyles();
  // const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      login: '',
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
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <h2 >Вход</h2>
        <CastomTextField
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
        <CastomTextField
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

        <div >
          <div >
            <ButtonRegister
              text="Вход"
              type="submit"
              customType="primary"
              disabled={formik.isSubmitting || !formik.dirty}>
                SignIn
            </ButtonRegister>
          </div>

          <NavLink to={routes.registration}>
            <div>
            <ButtonRegister color="primary" variant="contained"  type="submit" disabled={!formik.isValid}>
           Register
        </ButtonRegister>
            </div>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;