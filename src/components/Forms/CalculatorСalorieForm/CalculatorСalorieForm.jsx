import { useFormik } from 'formik';
import {
  Block,
  BoxButton,
  Form,
  InputContainer,
  Wrapper,
} from './CalculatorСalorieForm.styled';
import { RadioInput, RadioLabel, ControlLabel } from './MuI';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { useTranslation } from 'react-i18next';
import { setUserData } from 'redux/auth/authSlice';
import { transformUserData } from './transformUserData';
import { useMedia, useMobileModal } from 'hooks/ui';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import * as yup from 'yup';

const typeBlood = [1, 2, 3, 4];

const CalculatorСalorieForm = ({ openModal, getPrivatDailyNorma }) => {
  const { t } = useTranslation();
  const [selectedTypeBlood, setSelectedTypeBlood] = useState(1);
  const { isMobile } = useMedia();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const [, openMobileModal] = useMobileModal();

  const validationSchema = yup.object({
    height: yup
      .number()
      .typeError(t('validation.heightTypeError'))
      .min(100, t('validation.heightMin'))
      .max(250, t('validation.heightMax'))
      .required(t('validation.height')),
    age: yup
      .number(t('validation.ageNumber'))
      .typeError(t('validation.ageTypeError'))
      .min(18, t('validation.ageMin'))
      .max(100, t('validation.ageMax'))
      .required(t('validation.age')),
    currentWeight: yup
      .number(t('validation.currentWeightNumber'))
      .typeError(t('validation.currentWeightTypeError'))
      .min(20, t('validation.currentWeightMin'))
      .max(500, t('validation.currentWeightMax'))
      .required(t('validation.currentWeight')),
    desiredWeight: yup
      .number(t('validation.desiredWeightNumber'))
      .typeError(t('validation.desiredWeightTypeError'))
      .min(20, t('validation.desiredWeightMin'))
      .max(500, t('validation.desiredWeightMax'))
      .required(t('validation.desiredWeight')),
  });
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
      dispatch(setUserData(transformUserData(paramsUser)));
      if (isLoggedIn) {
        await getPrivatDailyNorma(paramsUser);
      }

      if (formik.dirty && !isLoggedIn && !isMobile) {
        await openModal();
      }
      if (formik.dirty && !isLoggedIn && isMobile) {
        await openMobileModal();
      }
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Wrapper>
          <Input
            name="height"
            label={t('height')}
            value={formik.values.height}
            onChange={formik.handleChange}
            error={formik.touched.height && Boolean(formik.errors.height)}
            helperText={formik.touched.height && formik.errors.height}
          />
          <Input
            name="age"
            label={t('age')}
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
          <Input
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
          <Input
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
      <BoxButton>
        <Button type="submit" text={t('start')} />
      </BoxButton>
    </Form>
  );
};

export default CalculatorСalorieForm;
