import React from 'react';
import { classNames } from '@/utils/helpers/css';
import { InputPropsType } from '@/utils/types/formfield';
import { isErrorExist } from '@/utils/helpers/form';
import { useFormContext } from 'react-hook-form';
import styles from './textfield.module.css';

const sizeStyles = {
  'half': styles.half,
  'full': styles.full
};

export default function TextField({name, label, size = 'half', type = 'text', unit}: InputPropsType) {
  const { register, formState: { errors } } = useFormContext();
  const isError = isErrorExist(name, errors);

  return (
    <div className={classNames(styles.wrapper, sizeStyles[size])}>
      <label htmlFor={name}>{label}</label>
      <div className={classNames(styles.container, isError ? 'error' : '')}>
        <input 
          id={name} 
          name={name} 
          type={type} 
          maxLength={15}
          {...register(name, {
            required: {
              value: true,
              message: '{name} is required',
            },
          })}
        />
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
    </div>
  );
}