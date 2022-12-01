import * as yup from 'yup';

const loginFormSchema = yup.object().shape({
  min: yup.number().max(1000).required().positive().integer(),
  max: yup.number().max(1000).required().positive().integer(),
});

export default loginFormSchema;
