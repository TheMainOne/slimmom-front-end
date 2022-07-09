
import { useFormik } from 'formik';
import * as yup from 'yup';
import {  Form } from './RegistrationForm.styled';
import { ButtonRegister, CastomTextField } from './MuI';
// import {  useDispatch } from 'react-redux';

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(3, 'Name should be of min 3 characters length')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of min 8 characters length')
    .required('Password is required'),
});

const RegistrationForm = () => {
  // const dispatch = useDispatch();

   const formik = useFormik({
     initialValues: {
      name:'',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
     onSubmit: (values, {resetForm}) => {
      // dispatch(register(values));
      //  console.log(values);
        resetForm();
    },
  });
// const Input = ({typeInput}) => {
//   return <TextField
//           variant="standard"
//         id={typeInput}
//           name={typeInput}
//     label={`${typeInput} *`}
//           type={typeInput}
//           value={formik.values[typeInput]}
//           onChange={formik.handleChange}
//           error={formik.touched[typeInput] && Boolean(formik.errors[typeInput])}
//           helperText={formik.touched[typeInput] && formik.errors[typeInput]}
//         />
// }
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
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
      />
      
        <ButtonRegister color="primary" variant="contained"  type="submit" disabled={!formik.isValid}>
           Register
        </ButtonRegister>
        
      </Form>)

};
export default RegistrationForm;

