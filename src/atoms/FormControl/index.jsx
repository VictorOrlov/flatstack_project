import React from 'react';
import styles from './FormControl.module.css';

const FormControl = props => (
  <div className={styles.form_control}>
    {props.children}
  </div>
);
export default FormControl;
