import React, { Component } from 'react';
import  {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import HeroesPage from './pages/HeroesPage';
import ThisHeroPage from './pages/ThisHeroPage';
import MoovesPage from './pages/MoovesPage';
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/heroes" component={HeroesPage} exact />
            <Route path="/heroes/:id" component={ThisHeroPage} />
            <Route path="/films" component={MoovesPage} exact />
            <Route component={NotFoundPage}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
