import React from 'react';
import styles from './NotFoundPage.module.css';
import BtnParall from '../../atoms/BtnParall';

const NotFoundPage = () => (
  <main className={styles.main_style}>
    <h1>Ты что тут делаешь? Иди домой!!! </h1>
    <br />
    <br />
    <BtnParall link="/">Идти домой</BtnParall>
  </main>
);

export default NotFoundPage;
