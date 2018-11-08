import React, {Component} from "react";
import Slider from "react-slick";
import styles from './Sections.module.css'



export default class Section extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div className={styles.section}>
        <h3>{this.props.title}</h3>
        <Slider {...settings} className={styles.sliderBG}>
          {this.props.children}
        </Slider>
      </div>
    );
  }
}
