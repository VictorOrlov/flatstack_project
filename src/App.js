import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './templates/Header';
import Footer from './templates/Footer';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
      <Header />
      <Home />
      <Footer />
      </div> 
    );
  }
}

export default App;
