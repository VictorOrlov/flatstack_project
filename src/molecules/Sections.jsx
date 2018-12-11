import React from 'react';
import Slider from 'react-slick';
import styles from './Sections.module.css';


const Section = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const { children, title } = props;
  return (
    <div className={`${styles.section} d-none d-md-block`}>
      <h3>{title}</h3>
      <Slider {...settings} className={styles.sliderBG}>
        {children}
      </Slider>
    </div>
  );
};
export default Section;
