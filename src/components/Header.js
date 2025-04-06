import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../Images/logo-skin.jpg';

// componente de navegacion principal
function Header() {
  // estado para controlar el menu movil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // estado para controlar si el header es transparente
  const [isTransparent, setIsTransparent] = useState(true);

  // efecto para cambiar el header al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsTransparent(isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // header principal con clase dinamica segun scroll
    <header className={`header ${isTransparent ? 'transparent' : ''}`}>
      <div className="container">
        {/* logo de la empresa */}
        <a href="/" className="logo">
          <img src="/images/logo-skin.jpg" alt="SkinTeam Logo" />
        </a>

        {/* boton del menu movil */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* navegacion principal */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 