import React, {Component} from 'react';
import './Footer.css';
import instagram from '../../img/footer/instagram-logo.svg';
import vk from '../../img/footer/vk-social-logotype.svg';
import facebook from '../../img/footer/facebook-logo-button.svg';

class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="footer__contact_with_us row m-0 justify-content-center">
          <h1>i am footer</h1>
        </div>
        {/* <!-- Ссылки на соц.сети --> */}
        <div className="footer__social_networks row m-0 justify-content-center">
          <div className="col-5 col-sm-4 col-md-2 h-50 align-self-center">
            <a href="https://www.instagram.com/marvel/?hl=ru" className="social_ico">
              <img src={instagram} alt=""/>
            </a>
            <a href="https://vk.com/id169404441" className="social_ico">
              <img src={vk} alt=""/>
            </a>
            <a href="https://ru-ru.facebook.com/Marvel/" className="social_ico">
              <img src={facebook} alt=""/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;