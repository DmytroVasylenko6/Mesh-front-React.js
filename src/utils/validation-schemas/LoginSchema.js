import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .strict(true)
    .required('Required field!'),
  password: Yup.string()
    .min(6, 'Min. 6 characters!')
    .strict(true)
    .required('Required field!'),
});
export default loginSchema;
