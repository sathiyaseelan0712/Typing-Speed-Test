// index.js or main entry file
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './Styles/fonts.css';
ReactDOM.render(
  <React.StrictMode>
    <App/>
    </React.StrictMode>,
  document.getElementById('root')
);
