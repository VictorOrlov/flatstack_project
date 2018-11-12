import React from 'react';
import styles from './styles/NotFoundPage.module.css';
import BtnParall from '../atoms/BtnParall';

const NotFoundPage = () => (
  <main className={styles.main_style}>
    <h1>Гидра атакует!!! </h1>
    <BtnParall link="/">Назад к безопасности</BtnParall>
  </main>
);

export default NotFoundPage;