import { TextAreaPropsType } from '@/utils/types/formfield';
import React, { ChangeEvent, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { isErrorExist } from '@/utils/helpers/form';

import styles from './textarea.module.css';

export default function TextArea({
  name, 
  label, 
  maxLength, 
  placeholder
}: TextAreaPropsType) {
  const { register, formState: { errors } } = useFormContext();
  const isError = isErrorExist(name, errors);

  const [characterCount, setCharacterCount] = useState<number>(0);  

  const handleHelper = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCharacterCount(e.target.value.length);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <textarea 
        className={isError ? 'error' : ''}
        id={name}
        name={name} 
        maxLength={maxLength} 
        placeholder={placeholder}
        onChange={handleHelper}
        {...register(name, {
          required: {
            value: true,
            message: '{name} is required',
          },
        })}
      />
      <span className={styles.helper}>{characterCount}/{maxLength} Characters</span>
    </div>
  );
}