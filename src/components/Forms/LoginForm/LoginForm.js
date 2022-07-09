import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import {InputAdornment, IconButton } from '@material-ui/core';
import { ButtonLogin, CastomTextField } from './Mui';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { logIn } from '../../redux/auth/auth_operations';
// import routes from '../../routes';
// import { NavLink } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import { Form, ButtonContainer } from './LoginForm.styled';

// const useStyles = makeStyles({
//   input: {
//     width: 289,
//     '@media (min-width: 768px)': {
//       width: 240,
//     },
//   },
//   loginInput: {
//     marginBottom: 40,
//   },
//   passwordInput: {
//     marginBottom: 60,
//   },
// });

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
  // const [showPassword, setShowPassword ] = useState(false);
  // const handleClickShowPassword = () => setShowPassword(!showPassword);
  // const handleMouseDownPassword = () => setShowPassword(!showPassword);
  // const classes = useStyles();
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
         <CastomTextField
             variant="standard"
             id="email"
             name="email"
             label="Email *"
             value={formik.values.name}
             onChange={formik.handleChange}
             error={formik.touched.name && Boolean(formik.errors.name)}
             helperText={formik.touched.name && formik.errors.name}
        />
        <CastomTextField
          // className={`${classes.input} ${classes.passwordInput}`}
          variant="standard"
          id="password"
          name="password"
          label="Password *"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <IconButton
          //         aria-label="toggle password visibility"
          //         onClick={handleClickShowPassword}
          //         onMouseDown={handleMouseDownPassword}
          //       >
          //         {showPassword ? <Visibility /> : <VisibilityOff />}
          //       </IconButton>
          //     </InputAdornment>
          //   ),
          // }}
        />

       
          <ButtonContainer>
          <ButtonLogin color="primary" variant="contained"  type="submit" disabled={!formik.isValid}>
           Login
        </ButtonLogin>
         
          {/* <NavLink to={routes.registration}> */}
            
            <ButtonLogin color="primary" variant="contained"  type="submit" disabled={!formik.isValid}>
           Register
        </ButtonLogin>
           
          {/* </NavLink> */}
        </ButtonContainer>
      </Form>
   </div>
  );
};

export default LoginForm;