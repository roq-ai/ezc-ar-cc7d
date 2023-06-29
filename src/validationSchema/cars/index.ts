import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  make: yup.string().required(),
  year: yup.number().integer().required(),
  status: yup.string().required(),
  company_id: yup.string().nullable(),
});
