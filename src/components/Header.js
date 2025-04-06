import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../Images/logo-skin.jpg';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#inicio" className="logo">
            <img src={logo} alt="SkinTeam Logo" />
          </a>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
              <li><a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
              <li><a href="#nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
              <li><a href="#testimonios" onClick={() => setIsMenuOpen(false)}>Testimonios</a></li>
              <li><a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
              <li><a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
            </ul>
          </nav>

          <div className="auth-buttons">
            <a href="#login" className="btn-auth btn-login">Iniciar Sesión</a>
            <a href="#register" className="btn-auth btn-register">Registrarse</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 