import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <ThemeProvider>
    <App />
    
    
  </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
);
reportWebVitals();
