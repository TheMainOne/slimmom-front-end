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

const RegistrationForm = () => {
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
      {Object.keys(formik.initialValues).map(typeInput => (
        <CastomTextField
          key={typeInput}
          variant="standard"
          id={typeInput}
          name={typeInput}
          label={`${typeInput[0].toUpperCase()}${typeInput.slice(1)} *`}
          value={formik.values[typeInput]}
          onChange={formik.handleChange}
          error={formik.touched[typeInput] && Boolean(formik.errors[typeInput])}
          helperText={formik.touched[typeInput] && formik.errors[typeInput]}
        />
      ))}

      <ButtonRegister color="primary" variant="contained" type="submit">
        Register
      </ButtonRegister>
    </Form>
  );
};

export default RegistrationForm;
