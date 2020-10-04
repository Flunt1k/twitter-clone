import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import theme from './theme';

import App from './App';
import { store } from './store/store'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
