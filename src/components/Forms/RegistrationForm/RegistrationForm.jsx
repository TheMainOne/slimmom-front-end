import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from 'redux/auth/authOperations';
import { useFormik } from 'formik';
import { Form } from './RegistrationForm.styled';
import { ButtonRegister, CastomTextField } from './MuI';
import { getUser } from 'redux/auth/authSelector';
import { useEffect, useState } from 'react';
import { getUserParams } from 'redux/slices/selector';
import { validationSchema } from './validationSchema';
import { transformUserData } from './transformUserData';
import { useTranslation } from 'react-i18next';

const RegistrationForm = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(getUser);
  const userParams = useSelector(getUserParams);

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
      if (userParams?.age) {
        const userData = transformUserData(userParams);
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
        label={t('name')}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <CastomTextField
        variant="standard"
        id="email"
        name="email"
        label={t('email')}
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <CastomTextField
        variant="standard"
        id="password"
        name="password"
        label={t('password')}
        type="password"
        autoComplete="new-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <ButtonRegister color="primary" variant="contained" type="submit">
        {t('register')}
      </ButtonRegister>
    </Form>
  );
};

export default RegistrationForm;
