// importamos las dependencias necesarias
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// creamos la raiz de la aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'));

// renderizamos la aplicacion
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// medicion de rendimiento
reportWebVitals();
