import { object, string } from 'yup';

export type FormData = {
  url: string;
};

export const VALIDATION_SCHEMA = object().shape({
  url: string().url('Must be valid URL').required('Cannot be empty'),
});
