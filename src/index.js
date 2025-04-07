// importamos las dependencias necesarias
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Precargar imágenes críticas
const precacheImages = () => {
  const criticalImages = [
    '/logo.png',
    // Agrega aquí otras imágenes críticas
  ];

  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

// Inicializar la aplicación
const container = document.getElementById('root');
const root = createRoot(container);

// Renderizar cuando el contenido esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    root.render(<App />);
    precacheImages();
  });
} else {
  root.render(<App />);
  precacheImages();
}

// medicion de rendimiento
reportWebVitals();
