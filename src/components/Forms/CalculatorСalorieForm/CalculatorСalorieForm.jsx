import { useFormik } from 'formik';
import * as yup from 'yup';
import { Form } from './CalculatorСalorieForm.styled';
import {
  ButtonRegister,
  CastomTextField,
  RadioInput,
  RadioLabel,
  ControlLabel,
} from './MuI';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveUserInfo } from 'redux/slices';

const typeBlood = [1, 2, 3, 4];

const validationSchema = yup.object({
  height: yup
    .number('Height it is number')
    .min(1, 'Height should be of min 1')
    .required('Height is required'),
  age: yup
    .number('Age it is number')
    .min(1, 'Age should be of min 1')
    .required('Age is required'),
  currentWeight: yup
    .number('CurrentWeight it is number')
    .min(1, 'CurrentWeight should be of min 1')
    .required('CurrentWeight is required'),
  desiredWeight: yup
    .number('DesiredWeight it is number')
    .min(1, 'DesiredWeight should be of min 1')
    .required('DesiredWeight is required'),
});

const CalculatorСalorieForm = ({ openModal }) => {
  const [selectedTypeBlood, setSelectedTypeBlood] = useState(1);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const paramsUser = { ...values, typeBlood: selectedTypeBlood };
      dispatch(saveUserInfo(paramsUser));
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <CastomTextField
        variant="standard"
        id="height"
        name="height"
        label="Height *"
        value={formik.values.height}
        onChange={formik.handleChange}
        error={formik.touched.height && Boolean(formik.errors.height)}
        helperText={formik.touched.height && formik.errors.height}
      />
      <CastomTextField
        variant="standard"
        id="age"
        name="age"
        label="Age *"
        value={formik.values.age}
        onChange={formik.handleChange}
        error={formik.touched.age && Boolean(formik.errors.age)}
        helperText={formik.touched.age && formik.errors.age}
      />
      <CastomTextField
        variant="standard"
        id="currentWeight"
        name="currentWeight"
        label="Current weight *"
        type="currentWeight"
        value={formik.values.currentWeight}
        onChange={formik.handleChange}
        error={
          formik.touched.currentWeight && Boolean(formik.errors.currentWeight)
        }
        helperText={formik.touched.currentWeight && formik.errors.currentWeight}
      />
      <CastomTextField
        variant="standard"
        id="desiredWeight"
        name="desiredWeight"
        label="Desired weight *"
        value={formik.values.desiredWeight}
        onChange={formik.handleChange}
        error={
          formik.touched.desiredWeight && Boolean(formik.errors.desiredWeight)
        }
        helperText={formik.touched.desiredWeight && formik.errors.desiredWeight}
      />
      <RadioLabel id="demo-row-radio-buttons-group-label">
        Blood type *
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
      <ButtonRegister
        color="primary"
        variant="contained"
        type="submit"
        onClick={() => {
          if (formik.dirty) {
            openModal();
          }
        }}
      >
        Start losing weight
      </ButtonRegister>
    </Form>
  );
};

export default CalculatorСalorieForm;
