import React, {Component} from 'react';
import styles from './Home.module.css';
import AdverFilm from '../organism/home/AdverFilm';
import HeroSection from '../organism/home/HeroSection';
import MooveSection from '../organism/home/MooveSection';
import NewsSection from '../organism/home/NewsSection';

class Home extends Component{
  render(){
    return(
      <div className={styles.home_page}>
        <AdverFilm/>
        <NewsSection/>
        <HeroSection />
        <MooveSection />
      </div>
    );
  }
}

export default Home;