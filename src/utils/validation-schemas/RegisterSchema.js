import * as Yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerSchema = Yup.object().shape({
  name: Yup.string().trim().required('Required field!'),
  email: Yup.string()
    .email('Invalid email!')
    .trim()
    .required('Required field!'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('Required field!'),
  contentLanguage: Yup.string().trim().required('Required field!'),
  company: Yup.string().trim().required('Required field!'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required field!'),
  country: Yup.string().trim().required('Required field!'),
  city: Yup.string().trim().required('Required field!'),
  aboutText: Yup.string()
    .max(250, 'You have exceeded the word limit!')
    .trim()
    .required('Required field!'),
  website: Yup.string().url('Invalid URL!').trim(),
  linkedin: Yup.string().url('Invalid URL!').trim(),
  facebook: Yup.string().url('Invalid URL!').trim(),
  instagram: Yup.string().url('Invalid URL!').trim(),
  URL: Yup.string().url('Invalid URL!').trim(),
});

export default registerSchema;
