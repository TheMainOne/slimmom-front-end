import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from 'redux/auth/authOperations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form } from './RegistrationForm.styled';
import { ButtonRegister, CastomTextField } from './MuI';
import { getUser } from 'redux/auth/authSelector';
import { useEffect, useState } from 'react';

const validationSchema = yup.object({
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
      /[a-zA-Z0-9]/,
      'Password must contain Latin letters and min 1 number.'
    )
    .required('Password is required'),
});

const RegistrationForm = () => {
  const [user, setUser] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(getUser);

  useEffect(() => {
    console.log(userInfo);
    if (isRegister && userInfo?.code === 201) {
      setUser(userInfo);
      dispatch(
        logIn({
          email: user.email,
          password: user.password,
        })
      );
      setIsRegister(false);
    }
  }, [userInfo, isRegister, dispatch, user]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      dispatch(register(values));
      setUser(values);
      setIsRegister(true);
      resetForm();
    },
  });
  // const Input = ({ typeInput }) => {
  //   return (
  //     <CastomTextField
  //       variant="standard"
  //       id={typeInput}
  //       name={typeInput}
  //       label={`${typeInput} *`}
  //       value={formik.values[typeInput]}
  //       onChange={formik.handleChange}
  //       error={formik.touched[typeInput] && Boolean(formik.errors[typeInput])}
  //       helperText={formik.touched[typeInput] && formik.errors[typeInput]}
  //     />
  //   );
  // };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <CastomTextField
        variant="standard"
        id="name"
        name="name"
        label="Name *"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
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
        autoComplete="new-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <ButtonRegister
        color="primary"
        variant="contained"
        type="submit"
        disabled={!formik.isValid}
      >
        Register
      </ButtonRegister>
    </Form>
  );
};

export default RegistrationForm;
