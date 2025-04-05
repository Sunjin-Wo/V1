import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2>Tratamientos y Servicios</h2>
        
        <div className="service-section">
          <h3>🩺 Consulta Dermatológica</h3>
          <p>Evaluamos tu piel con precisión médica. Nuestra consulta incluye diagnóstico completo de acné, manchas, rosácea, caída de cabello y otras afecciones cutáneas. Atención presencial y virtual.</p>
          <div className="service-items">
            <div className="service-item">Acné y manchas</div>
            <div className="service-item">Alopecia</div>
            <div className="service-item">Lunares y lesiones</div>
            <div className="service-item">Rosácea</div>
          </div>
        </div>

        <div className="service-section">
          <h3>✨ Procedimientos Estéticos</h3>
          <p>Tratamientos estéticos con resultados naturales. Nuestro enfoque es realzar tu belleza sin exageraciones.</p>
          <div className="service-items">
            <div className="service-item">Toxina botulínica (Botox)</div>
            <div className="service-item">Rellenos con ácido hialurónico</div>
            <div className="service-item">Peelings médicos</div>
            <div className="service-item">Limpieza facial profunda</div>
            <div className="service-item">Plasma rico en plaquetas (PRP)</div>
            <div className="service-item">Rejuvenecimiento láser</div>
          </div>
        </div>

        <div className="service-section">
          <h3>🧬 Ultraformer MPT</h3>
          <p>Tecnología de ultrasonido micro y macrofocalizado. Reafirma la piel, define el rostro y mejora arrugas sin cirugía ni tiempo de inactividad.</p>
          <div className="service-items">
            <div className="service-item">Piel más firme</div>
            <div className="service-item">Lifting sin bisturí</div>
            <div className="service-item">Resultados desde la primera sesión</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; 