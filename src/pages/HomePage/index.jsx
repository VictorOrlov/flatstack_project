import React from 'react';
import styles from './HomePage.module.css';
import PageTemplate from '../../templates/PageTemplate';
import AdverFilm from '../../organism/home/AdverFilm';
import HeroSection from '../../organism/home/HeroSection';
import MooveSection from '../../organism/home/MooveSection';
import NewsSection from '../../organism/home/NewsSection';

const HomePage = () => (
  <PageTemplate>
    <main className={styles.home_page}>
      <AdverFilm />
      <NewsSection />
      <HeroSection />
      <MooveSection />
    </main>
  </PageTemplate>
);

export default HomePage;
