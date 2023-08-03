import React from 'react';
import { TextItemPropsType } from '@/utils/types/textitem';
import { classNames } from '@/utils/helpers/css';

import styles from './textitem.module.css';

const labelTypes = {
  'normal': styles.normal,
  'hot': styles.hot,
  'gradient': styles.gradient
};

export default function TextItem({label, content, labelType = 'normal'}: TextItemPropsType) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>
        {label}
      </span>
      <span className={classNames(styles.content, labelTypes[labelType]) }>
        {content}
      </span>
    </div>
  );
}