import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MapForSection.module.css';
import { mooves } from '../atoms/List_Of_Mooves';
import { news } from '../atoms/List_Of_News';
import { marvelHeroes } from '../atoms/hero_page_List';

function MapForSection(e) {
  return e.map(item => (
    <div className={`${styles.itemlist} col-2`} key={item.id}>
      <Link to={item.link}>
        <div className={styles.itemlist__img}>
          <img src={item.img} alt="" />
        </div>
        <div className={styles.itemlist__title}>
          <h5>{item.name}</h5>
          <p>
            {' '}
            <strong>{item.category}</strong>
            {' '}
            {item.date}
          </p>
        </div>
      </Link>
    </div>
  ));
}

export const mooveList = MapForSection(mooves);
export const newsList = MapForSection(news);
export const allHeroes = MapForSection(marvelHeroes);
