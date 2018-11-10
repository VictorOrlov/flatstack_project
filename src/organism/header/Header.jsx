import React, {  Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component{
  render(){
    return(
      <header className="">
        <div className="header_content">
          <div className="header_image">
            <img src={require('../../img/header/marvel_studios.jpg')} alt=""/>
          </div>
          <div className="header_bar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <span className="navbar-brand">
                <img src={require('../../img/header/avengers_logo.png')} style={{height: 50, width: 60}} alt=""/>
              </span>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item ">
                    <Link className="nav-link" to="/">Главная <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/heroes">Герои</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/films">Фильмы</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Дополнительно
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Новости</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Исстории</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Комиксы</a>
                    </div>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;