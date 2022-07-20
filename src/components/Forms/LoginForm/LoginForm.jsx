import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CastomTextField } from './Mui';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { ButtonLogin } from './Mui';
import { Form } from './LoginForm.styled';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();

  const validationSchema = yup.object({
    email: yup
      .string(t('validation.emailString'))
      .email(t('validation.emailValid'))
      .required(t('validation.email')),
    password: yup
      .string(t('validation.passwordString'))
      .min(8, t('validation.passwordMin'))
      .required(t('validation.password')),
  });

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
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <ButtonLogin color="primary" variant="contained" type="submit">
          {t('logIn')}
        </ButtonLogin>
      </Form>
    </div>
  );
};

export default LoginForm;
