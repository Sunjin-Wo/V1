import React, { useState, useEffect } from 'react';
import logo from '../Images/logo-skin.jpg';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="SkinTeam Dermatología" />
        </div>
        <nav>
          <ul>
            <li onClick={() => scrollToSection('inicio')}>Inicio</li>
            <li onClick={() => scrollToSection('servicios')}>Servicios</li>
            <li onClick={() => scrollToSection('nosotros')}>Sobre Nosotros</li>
            <li onClick={() => scrollToSection('testimonios')}>Testimonios</li>
            <li onClick={() => scrollToSection('contacto')}>Contacto</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 