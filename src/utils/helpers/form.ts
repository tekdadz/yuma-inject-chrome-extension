import { FieldErrors, FieldValues } from 'react-hook-form';

export const isErrorExist = (name: string, errors: FieldErrors<FieldValues>) => {
  if(errors[name]) return true;
  return false;
};