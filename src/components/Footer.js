import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#privacy">Política de privacidad</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/skinteam" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/skinteam" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a 
                href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>Carrera 15 # 83-33</p>
            <p>Consultorio 510</p>
            <p>Bogotá, Colombia</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 SkinTeam Dermatología. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 