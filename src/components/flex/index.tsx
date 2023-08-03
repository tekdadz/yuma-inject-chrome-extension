import React from 'react';
import { FlexPropsType } from '@/utils/types/flex';

import styles from './flex.module.css';

export default function Flex({
  dir = 'row', 
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  gap = 0,
  children
}:FlexPropsType) {
  return <div 
    className={styles.container}
    style={{
      gap: `${gap}px`,
      flexDirection: dir, 
      justifyContent: justifyContent,
      alignItems: alignItems,
    }}
  >
    {children}
  </div>;
}