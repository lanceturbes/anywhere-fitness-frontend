import * as yup from 'yup';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username Required'),
  password: yup
    .string()
    .required('Password Required')
});

export default loginSchema;
