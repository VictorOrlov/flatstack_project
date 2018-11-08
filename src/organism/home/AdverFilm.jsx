import React from 'react';
import styles from './AdverFilm.module.css';
import BtnParall from '../../atoms/BtnParall'

const AdverFilm = () => (
  <div className={styles.film_advertising}>
    <div className={styles.trailer_adv}>
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/Du90MCtUpN0" 
        title="трейлер к человеку муравью"
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    </div>
    <div className={styles.btn_container}>
      <BtnParall>Узнать подробности</BtnParall>
    </div>
  </div>
);
export default AdverFilm;