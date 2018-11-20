import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import HeroesPage from './pages/HeroesPage';
// import ThisHeroPage from './pages/ThisHeroPage';
import MoovesPage from './pages/MoovesPage';
import NotFoundPage from './pages/NotFoundPage';
import RegistrationPage from './pages/RegistrationPage';
import CharactersPage from './pages/CharactersPage';
import CharPage from './pages/CharPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/heroes" component={CharactersPage} exact />
          <Route path="/heroes/:id" component={CharPage} />
          <Route path="/films" component={MoovesPage} exact />
          <Route path="/registration" component={RegistrationPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
