import React from 'react';
import { 
    Route,
    Switch 
} from 'react-router-dom';
import App from './App';

import Categories from './components/Categories';
import NotFound from './components/NotFound';
import SingleJoke from './components/SingleJoke';

const Routes = () => (
    <App>
        <Switch >
            <Route exact path="/" component={Categories} />
            <Route exact path="/categories/:category" component={SingleJoke} />
            <Route component={NotFound} />
        </Switch>
    </App>
)

export default Routes;