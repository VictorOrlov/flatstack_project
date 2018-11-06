import React, {Component} from 'react';
import HeroSection from '../organism/home/HeroSection';
import styles from './Home.module.css';
import MooveSection from '../organism/home/MooveSection';

class Home extends Component{
  render(){
    return(
      <div className={styles.home_page}>
        <div className={styles.film_advertising}>
          <div className={styles.trailer_adv}>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/Du90MCtUpN0" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
          </div>
        </div>
        <HeroSection />
        <MooveSection />
      </div>
    );
  }
}

export default Home;