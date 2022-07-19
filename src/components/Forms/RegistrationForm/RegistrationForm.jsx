import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from 'redux/auth/authOperations';
import { useFormik } from 'formik';
import { BoxButton, Form } from './RegistrationForm.styled';
import { CastomTextField } from './MuI';
import { getUser, getUserData } from 'redux/auth/authSelector';
import { useEffect, useState } from 'react';
import { validationSchema } from './validationSchema';
import { Button } from 'components/Button';

const RegistrationForm = () => {
  const [user, setUser] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(getUser);
  const userData = useSelector(getUserData);

  useEffect(() => {
    if (isRegister && userInfo?.code === 201) {
      setUser(userInfo.data.user);
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
      if (userData?.age) {
        dispatch(register({ ...values, userData }));
      } else {
        dispatch(register({ ...values }));
      }
      setUser(values);
      setIsRegister(true);
      resetForm();
    },
  });

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
      <BoxButton>
        <Button type="submit" text="Register" />
      </BoxButton>
    </Form>
  );
};

export default RegistrationForm;
