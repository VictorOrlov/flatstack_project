import React from 'react';
import {mooves} from '../atoms/List_Of_Mooves';
import styles from './MapForSection.module.css';

function MapForSection(e){
  return e.map(item => (
    <div className={styles.itemlist + ' ' + "col-2"} key={item.id}>
      <div className={styles.itemlist__img}>
        <img src={item.img} alt=""/>
      </div>
      <div className={styles.itemlist__title}>
        <h5>{item.name}</h5>
        <p> <strong>фильм |</strong> {item.date}</p>
      </div>
    </div>
  ))
}

export const mooves_list = MapForSection(mooves);