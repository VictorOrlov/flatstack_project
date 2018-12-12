import React from 'react';
import { Link } from 'react-router-dom';
import marvelStudios from '../../img/header/marvel_studios.jpg';
import avengersLogo from '../../img/header/avengers_logo.png';
import styles from './Header.module.css';

const Header = () => (
  <header className="">
    <div className={`${styles.header_content}`}>
      <div className={`${styles.header_image}`}>
        <img src={marvelStudios} alt="" />
      </div>
      <div className={`${styles.header_bar}`}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">
            <img src={avengersLogo} style={{ height: 50, width: 60 }} alt="" />
          </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                      Главная
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/heroes">Герои</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/films">Фильмы</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fgds">Новости</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/registration">Регистрация</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
);
export default Header;
