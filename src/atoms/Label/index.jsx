import React from 'react';
import styles from './Label.module.css';

const Label = (props) => {
  const { children } = props;
  return (
    <label className={styles.label} {...props}>{children}</label>
  );
};

export default Label;
