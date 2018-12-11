import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
