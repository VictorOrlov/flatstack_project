import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BtnParall.module.css';

const BtnParall = props => (
  <Link className={styles.button} to={props.link}>
    <span className={styles.skew_fix}>{props.children}</span>
  </Link>
);
export default BtnParall;
