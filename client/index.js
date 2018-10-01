/* eslint:disable react/jsx-filename-extension */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './router';
import './assets/style.css';


const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
render(<App />, document.getElementById('app'));
