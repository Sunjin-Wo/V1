import React, { useState } from 'react';
import './Header.css';
import logo from '../Images/logo-skin.jpg';
import Login from './Login';
import Register from './Register';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <a href="#inicio">
            <img src={logo} alt="SkinTeam Logo" className="logo" />
          </a>
        </div>

        <nav className="nav-menu">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button 
            className="btn-login"
            onClick={() => setShowLogin(true)}
          >
            Iniciar Sesión
          </button>
          <button 
            className="btn-register"
            onClick={() => setShowRegister(true)}
          >
            Registrarse
          </button>
        </div>
      </header>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </>
  );
}

export default Header; 