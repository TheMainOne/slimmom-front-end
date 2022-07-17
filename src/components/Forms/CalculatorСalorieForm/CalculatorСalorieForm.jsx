import { useFormik } from 'formik';
import {
  Block,
  Form,
  InputContainer,
  Wrapper,
} from './CalculatorСalorieForm.styled';
import {
  ButtonRegister,
  CastomTextField,
  RadioInput,
  RadioLabel,
  ControlLabel,
} from './MuI';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserInfo } from 'redux/slices';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { useTranslation } from 'react-i18next';
import { validationSchema } from './validationSchema';
import { setUserData } from 'redux/auth/authSlice';
import { transformUserData } from '../RegistrationForm/transformUserData';

const typeBlood = [1, 2, 3, 4];

const CalculatorСalorieForm = ({ openModal, getPrivatDailyNorma }) => {
  const [selectedTypeBlood, setSelectedTypeBlood] = useState(1);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const paramsUser = { ...values, bloodType: selectedTypeBlood };
      dispatch(saveUserInfo(paramsUser));

      if (isLoggedIn) {
        dispatch(setUserData(transformUserData(paramsUser)));
        await getPrivatDailyNorma(paramsUser);
      }

      if (formik.dirty && !isLoggedIn) {
        await openModal();
      }

      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Wrapper>
          <CastomTextField
            variant="standard"
            id="height"
            name="height"
            label={t('height')}
            value={formik.values.height}
            onChange={formik.handleChange}
            error={formik.touched.height && Boolean(formik.errors.height)}
            helperText={formik.touched.height && formik.errors.height}
          />
          <CastomTextField
            variant="standard"
            id="age"
            name="age"
            label={t('age')}
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
          <CastomTextField
            variant="standard"
            id="currentWeight"
            name="currentWeight"
            label={t('weight')}
            type="currentWeight"
            value={formik.values.currentWeight}
            onChange={formik.handleChange}
            error={
              formik.touched.currentWeight &&
              Boolean(formik.errors.currentWeight)
            }
            helperText={
              formik.touched.currentWeight && formik.errors.currentWeight
            }
          />
        </Wrapper>
        <Wrapper>
          <CastomTextField
            variant="standard"
            id="desiredWeight"
            name="desiredWeight"
            label={t('desiredWeight')}
            value={formik.values.desiredWeight}
            onChange={formik.handleChange}
            error={
              formik.touched.desiredWeight &&
              Boolean(formik.errors.desiredWeight)
            }
            helperText={
              formik.touched.desiredWeight && formik.errors.desiredWeight
            }
          />
          <Block>
            <RadioLabel id="demo-row-radio-buttons-group-label">
              {t('bloodType')}
            </RadioLabel>
            <RadioGroup
              id="bloodType"
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              onChange={e => setSelectedTypeBlood(e.target.value)}
            >
              {typeBlood.map(number => (
                <ControlLabel
                  key={number}
                  value={number}
                  control={<RadioInput />}
                  label={number}
                  checked={number === Number(selectedTypeBlood)}
                />
              ))}
            </RadioGroup>
          </Block>
        </Wrapper>
      </InputContainer>

      <ButtonRegister color="primary" variant="contained" type="submit">
        {t('start')}
      </ButtonRegister>
    </Form>
  );
};

export default CalculatorСalorieForm;
