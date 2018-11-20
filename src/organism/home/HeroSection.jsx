import React, {Component} from 'react';
import {firstHeroes, moreHeroes} from '../../molecules/MapHeroes';
import BtnGrad from '../../atoms/BtnGrad';
import styles from './HeroSection.module.css'

class HeroSection extends Component {
  state = {
    isShow: false
  };

  showMoreHero = () =>{
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  };
  render(){
    let {isShow} = this.state;
    return (
      <div className={styles.section}>
        <span className="col-10"><h4>Герои</h4></span>
        <div className={`${styles.all_heroes} row justify-content-center`}>
          {firstHeroes}
          {isShow && moreHeroes}
          <div className="w-100"></div>
          <div className={`${styles.herolist} col-2`}>
            <BtnGrad click={this.showMoreHero}>{isShow ? "Скрыть" : "Ещё Герои"}</BtnGrad>
          </div>
        </div>
      </div>
    );
  }
}
export default HeroSection;