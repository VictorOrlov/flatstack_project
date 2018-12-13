import React from 'react';
import { Link } from 'react-router-dom';
import { heroes, moreHEroes } from '../atoms/List_Of_Heroes';
import styles from './MapHeroes.module.css';

function mapHeroes(e) {
  return e.map(hero => (
    <div className={`${styles.herolist} col-2`} key={hero.id}>
      <Link to={hero.link}>
        <div className={styles.herolist__img}>
          <img src={hero.img} alt="" />
        </div>
        <span className={styles.herolist__name}>{hero.hero_name}</span>
      </Link>
    </div>));
}


export const firstHeroes = mapHeroes(heroes);
export const moreHeroes = mapHeroes(moreHEroes);
