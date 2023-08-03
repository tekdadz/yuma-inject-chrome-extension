import React from 'react';
import { ButtonPropsType } from '@/utils/types/button'; 

import styles from './button.module.css';

export default function Button({type = 'button', label, handler}: ButtonPropsType) {
  return (
    <button type={type} className={styles.button} onClick={handler}>{label}</button>
  );
}