import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>SkinTeam</h3>
            <p>Cuidamos tu piel con la mejor tecnología y profesionales expertos en dermatología estética.</p>
            <div className="footer-schedule">
              <h4>Horario de Atención</h4>
              <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
              <p>Sábados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="#privacy">Política de privacidad</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>Carrera 15 # 83-33</p>
                  <p>Consultorio 510</p>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <p>+57 (601) XXX-XXXX</p>
                  <p>+57 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>contacto@skinteam.com</p>
              </div>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/skinteam" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/skinteam" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.tiktok.com/@skinteam" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SkinTeam Dermatología. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#terms">Términos y Condiciones</a>
            <span className="separator">|</span>
            <a href="#privacy">Privacidad</a>
            <span className="separator">|</span>
            <a href="#sitemap">Mapa del Sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 