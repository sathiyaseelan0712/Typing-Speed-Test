import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the use of 'react-dom/client'
import App from './App';
import './index.css';
import './Styles/fonts.css';
import {UserProvider} from './context/UserContext'
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root.
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
