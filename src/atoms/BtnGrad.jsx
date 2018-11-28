import React from 'react';
import styles from './BtnGrad.module.css';

const BtnAtom = props => (
  <div className={`${styles.herolist} col-2`}>
    <span className={styles.gradient_btn} onClick={props.click}>{props.children}</span>
  </div>
);
export default BtnAtom;