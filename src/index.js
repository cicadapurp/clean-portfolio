import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import ThemeProvider from './providers/ThemeProvider'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
  
, document.getElementById('root'));


serviceWorker.unregister();
