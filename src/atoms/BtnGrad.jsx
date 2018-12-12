import React from 'react';
import styles from './BtnGrad.module.css';

const BtnAtom = (props) => {
  const { click, children } = props;
  return (
    <div className={`${styles.herolist} col-2`}>
      <span className={styles.gradient_btn} onClick={click}>{children}</span>
    </div>
  );
};
export default BtnAtom;
