import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/index';
// import HeroesPage from './pages/HeroesPage';
// import ThisHeroPage from './pages/ThisHeroPage';
import MoovesPage from './pages/MoovesPage/index';
import NotFoundPage from './pages/NotFoundPage/index';
import RegistrationPage from './pages/RegistrationPage/index';
import CharactersPage from './pages/CharactersPage/index';
import CharPage from './pages/CharPage/index';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/flatstack_project">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/heroes" component={CharactersPage} exact />
          <Route path="/hero/:id" component={CharPage} />
          <Route path="/films" component={MoovesPage} exact />
          <Route path="/registration" component={RegistrationPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
