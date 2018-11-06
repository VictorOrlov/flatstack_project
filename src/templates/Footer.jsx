import React, {Component} from 'react';
import './Footer.css';

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
            <a href="#" className="social_ico">
              <img src={require('../img/footer/instagram-logo.svg')} alt=""/>
            </a>
            <a href="#" className="social_ico">
              <img src={require('../img/footer/vk-social-logotype.svg')} alt=""/>
            </a>
            <a href="#" className="social_ico">
              <img src={require('../img/footer/facebook-logo-button.svg')} alt=""/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;