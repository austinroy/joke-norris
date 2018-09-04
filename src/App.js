import React, { Component } from 'react';
import './sass/main.css';
import { 
  BrowserRouter,
  Route,
  Switch 
} from 'react-router-dom';
import Categories from './components/Categories';
import Jokes from './components/Jokes';
import NotFound from './components/NotFound';
import SingleJoke from './components/SingleJoke';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch >
          <Route exact path="/" component={Categories} />
          <Route exact path="/jokes/:searchparam" component={Jokes} />
          <Route exact path="/:category" component={SingleJoke} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
