import React from 'react';
import Header from '../organism/header/Header';
import Footer from '../organism/footer/Footer';

const PageTemplate = (props) => (
  <div>
    <Header/>
    {props.children}
    <Footer/>
  </div>
);

export default PageTemplate;
