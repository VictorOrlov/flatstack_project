import React from 'react';
import styles from './input.module.css';

const Input = props => (
  <input type="text" className={styles.input} {...props} />
);
export default Input;
