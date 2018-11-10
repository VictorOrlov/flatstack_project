import React from 'react';
import {mooves} from '../atoms/List_Of_Mooves';
import {news} from '../atoms/List_Of_News';
import {marvel_heroes} from '../atoms/hero_page_List';
import styles from './MapForSection.module.css';

function MapForSection(e){
  return e.map(item => (
    <div className={styles.itemlist + ' ' + "col-2"} key={item.id}>
      <div className={styles.itemlist__img}>
        <img src={item.img} alt=""/>
      </div>
      <div className={styles.itemlist__title}>
        <h5>{item.name}</h5>
        <p> <strong>{item.category}</strong> {item.date}</p>
      </div>
    </div>
  ))
}

export const mooves_list = MapForSection(mooves);
export const news_list = MapForSection(news);
export const all_heroes = MapForSection(marvel_heroes);