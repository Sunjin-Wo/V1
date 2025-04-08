import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="new-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Sección de la marca y enlaces rápidos */}
          <div className="footer-section">
            <h2>SkinTeam</h2>
            <p>Cuidamos tu piel con la mejor tecnología y profesionales expertos en dermatología estética.</p>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Sección de contacto */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="contact-details">
              <p><i className="fas fa-map-marker-alt"></i> Carrera 15 # 83-33, Consultorio 510</p>
              <p><i className="fas fa-phone"></i> +57 (601) XXX-XXXX</p>
              <p><i className="fas fa-envelope"></i> contacto@skinteam.com</p>
            </div>
          </div>

          {/* Sección de redes sociales */}
          <div className="footer-section">
            <h3>Síguenos</h3>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SkinTeam. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 