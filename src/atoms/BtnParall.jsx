import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BtnParall.module.css';

const BtnParall = (props) => {
  const { link, click, children } = props;
  return (
    <Link className={styles.button} to={link} onClick={click}>
      <span className={styles.skew_fix}>{children}</span>
    </Link>
  );
};
export default BtnParall;
