import React, {Component} from 'react';
import styles from './styles/HomePage.module.css';
import PageTemplate from '../templates/PageTemplate';
import AdverFilm from '../organism/home/AdverFilm';
import HeroSection from '../organism/home/HeroSection';
import MooveSection from '../organism/home/MooveSection';
import NewsSection from '../organism/home/NewsSection';

class HomePage extends Component{
  render(){
    return(
      <PageTemplate>
        <main className={styles.home_page}>
          <AdverFilm/>
          <NewsSection/>
          <HeroSection />
          <MooveSection />
        </main>
      </PageTemplate>
    );
  }
}

export default HomePage;