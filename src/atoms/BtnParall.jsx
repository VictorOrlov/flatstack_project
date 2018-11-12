import React from 'react';
import styles from './BtnParall.module.css';
import {Link} from 'react-router-dom'

const BtnParall = (props) => (
  <Link className={styles.button} to={props.link}>
    <span className={styles.skew_fix}>{props.children}</span>
  </Link>
);
export default BtnParall;