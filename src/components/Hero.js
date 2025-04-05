import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1>Transforma tu piel, transforma tu vida.</h1>
        <p>Confía en dermatología médica y estética con resultados reales.</p>
        <button 
          className="btn-primary"
          onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
        >
          Solicita tu consulta
        </button>
      </div>
    </section>
  );
}

export default Hero; 