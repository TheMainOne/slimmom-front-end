import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from 'redux/auth/authOperations';
import { useFormik } from 'formik';
import { BoxButton, Form } from './RegistrationForm.styled';
import { getUser, getUserData } from 'redux/auth/authSelector';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import * as yup from 'yup';

const RegistrationForm = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector(getUser);
  const userData = useSelector(getUserData);
  const validationSchema = yup.object({
    name: yup
      .string(t('validation.nameString'))
      .min(3, t('validation.nameMin'))
      .max(254, t('validation.nameMax'))
      .required(t('validation.name')),
    email: yup
      .string(t('validation.emailString'))
      .min(3, t('validation.emailMin'))
      .max(254, t('validation.emailMax'))
      .email(t('validation.emailValid'))
      .required(t('validation.email')),
    password: yup
      .string(t('validation.passwordString'))
      .min(8, t('validation.passwordMin'))
      .max(100, t('validation.passwordMax'))
      .matches(/^[a-zA-Z0-9]+/, t('validation.passwordMatches'))
      .required(t('validation.password')),
  });
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
      <Input
        name="name"
        label={t('name')}
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <Input
        name="email"
        label={t('email')}
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <Input
        name="password"
        label={t('password')}
        type="password"
        autoComplete="new-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <BoxButton>
        <Button type="submit" text={t('register')} />
      </BoxButton>
    </Form>
  );
};

export default RegistrationForm;
