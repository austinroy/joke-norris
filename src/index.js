import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
