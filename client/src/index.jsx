// 1. IMPORT REACT
import React from 'react';

// 2. ADDITIONAL IMPORTS
import ReactDOM from 'react-dom';

// 3. CREATE COMPONENT
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

// 4. RENDER COMPONENT TO THE SCREEN
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);
