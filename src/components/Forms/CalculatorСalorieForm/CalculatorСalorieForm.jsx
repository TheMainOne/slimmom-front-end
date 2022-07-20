import { useFormik } from 'formik';
import {
  Block,
  BoxButton,
  Form,
  InputContainer,
  Wrapper,
} from './CalculatorСalorieForm.styled';
import {RadioInput, RadioLabel, ControlLabel } from './MuI';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { useTranslation } from 'react-i18next';
import { validationSchema } from './validationSchema';
import { setUserData } from 'redux/auth/authSlice';
import { transformUserData } from './transformUserData';
import { useShowModal } from 'hooks/ui';
import useResizeAware from 'react-resize-aware';
import { Button } from 'components/Button';
import { Input } from 'components/Input';

const typeBlood = [1, 2, 3, 4];

const CalculatorСalorieForm = ({ openModal, getPrivatDailyNorma }) => {
  const { t } = useTranslation();
  const [selectedTypeBlood, setSelectedTypeBlood] = useState(1);
  const [resizeListener, { width }] = useResizeAware();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const mobileWidth = width <= 767;
  const [, toggleMobileModal] = useShowModal();
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

      if (formik.dirty && !isLoggedIn && !mobileWidth) {
        await openModal();
      }
      if (formik.dirty && !isLoggedIn && mobileWidth) {
        await toggleMobileModal();
      }
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {resizeListener}
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
