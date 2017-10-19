/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import { Provider } from 'react-redux';
import combinedApp from './helpers/combineReducers';
import { createStore } from 'redux';
import App from './app';

const store = createStore(combinedApp);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
