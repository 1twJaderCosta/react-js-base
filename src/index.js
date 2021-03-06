import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from '~/router';
import configureStore from '~/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

