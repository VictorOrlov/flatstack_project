import React from 'react';
import styles from './styles/HeroesPage.module.css';
import PageTemplate from '../templates/PageTemplate';
import {allHeroes} from '../molecules/MapForSection';

const HeroesPage = () => (
  <PageTemplate>
    <main className={`${styles.heroes_page} row justify-content-center`}>
      {allHeroes}
    </main>
  </PageTemplate>
);

export default HeroesPage;