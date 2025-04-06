import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = {
    consulta: {
      title: "Dermatología Estética",
      subtitle: "DERMATOLOGÍA ESTÉTICA",
      description: "Evaluación especializada con diagnóstico preciso de condiciones cutáneas. Atención personalizada presencial y virtual.",
      items: [
        "Acné y manchas",
        "Alopecia",
        "Lunares y lesiones",
        "Rosácea"
      ]
    },
    esteticos: {
      title: "Dermatología Clínica",
      subtitle: "DERMATOLOGÍA CLÍNICA",
      description: "Tratamientos de última generación para realzar su belleza natural con resultados armoniosos y duraderos.",
      items: [
        "Toxina botulínica (Botox)",
        "Rellenos con ácido hialurónico",
        "Peelings médicos",
        "Limpieza facial profunda",
        "Plasma rico en plaquetas (PRP)",
        "Rejuvenecimiento láser"
      ]
    },
    ultraformer: {
      title: "Dermatología Quirúrgica",
      subtitle: "DERMATOLOGÍA QUIRÚRGICA",
      description: "Tecnología avanzada de ultrasonido micro y macrofocalizado para rejuvenecimiento y reafirmación sin cirugía.",
      items: [
        "Piel más firme",
        "Lifting sin bisturí",
        "Resultados desde la primera sesión"
      ]
    },
    pediatrica: {
      title: "Dermatología Pediátrica",
      subtitle: "DERMATOLOGÍA PEDIÁTRICA",
      description: "Atención especializada en el cuidado de la piel de los más pequeños, con tratamientos seguros y efectivos.",
      items: [
        "Dermatitis atópica",
        "Acné infantil",
        "Alergias cutáneas",
        "Nevus congénitos"
      ]
    }
  };

  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Soluciones dermatológicas integrales con los más altos estándares médicos</p>
        </div>
        
        <div className="services-grid">
          {Object.entries(services).map(([key, service]) => (
            <div key={key} className="service-card">
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <button 
                  className="btn-ver-mas"
                  onClick={() => setSelectedService(key)}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>
              ×
            </button>
            <h3>{services[selectedService].title}</h3>
            <p className="modal-description">{services[selectedService].description}</p>
            <div className="modal-items">
              {services[selectedService].items.map((item, index) => (
                <div key={index} className="modal-item">
                  <span className="modal-item-bullet">•</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services; 