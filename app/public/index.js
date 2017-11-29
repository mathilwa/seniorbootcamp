import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
require('./style/main.less');

import configureStore from './../frontend/redux/store.js';
import App from './../frontend/App.jsx';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App/>
  </Provider>,
  document.getElementById('app'),
);

