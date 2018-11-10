import React from 'react';
import styles from './styles/HeroesPage.module.css';
import PageTemplate from '../templates/PageTemplate';
import {all_heroes} from '../molecules/MapForSection';

const HeroesPage = () => (
  <PageTemplate>
    <main className={styles.heroes_page + ' ' + "row justify-content-center"}>
      {all_heroes}
    </main>
  </PageTemplate>
);

export default HeroesPage;