import React from 'react';
import styles from './BtnParall.module.css';

const BtnParall = (props) => (
  <a className={styles.button} href="#">
    <span className={styles.skew_fix}>{props.children}</span>
  </a>
);
export default BtnParall;