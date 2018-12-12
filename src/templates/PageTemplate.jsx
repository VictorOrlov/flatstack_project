import React from 'react';
import Header from '../organism/header/Header';
import Footer from '../organism/footer/Footer';

const PageTemplate = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageTemplate;
