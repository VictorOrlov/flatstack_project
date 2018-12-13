import React from 'react';
import PropTypes from 'prop-types';
import styles from './BtnGrad.module.css';

const BtnAtom = (props) => {
  const { click, children } = props;
  return (
    <div className={`${styles.herolist} col-2`}>
      <span className={styles.gradient_btn} onClick={click}>{children}</span>
    </div>
  );
};
BtnAtom.defaultProps = {
  click: {},
  children: 'кнопка',
};

BtnAtom.propTypes = {
  click: PropTypes.func,
  children: PropTypes.string,
};
export default BtnAtom;
