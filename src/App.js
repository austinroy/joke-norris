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
import {Provider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch >
            <Route exact path="/" component={Categories} />
            <Route exact path="/jokes/:searchparam" component={Jokes} />
            <Route exact path="/categories/:category" component={SingleJoke} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
