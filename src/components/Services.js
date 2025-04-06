import React, { useState } from 'react';
import './Services.css';
// Importar las imágenes
import consulta from '../Images/consulta.jpg';
import armonizacion from '../Images/armonizacion.jpg';
import procedimientos from '../Images/procedimientos.jpg';
import ultraformer from '../Images/ultraformer.jpg';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = {
    consulta: {
      title: "Consulta",
      subtitle: "Consulta Dermatológica",
      image: consulta,
      description: "Consulta especializada en dermatología",
      items: [
        "Evaluación personalizada",
        "Diagnóstico preciso",
        "Plan de tratamiento",
        "Seguimiento continuo"
      ]
    },
    armonizacion: {
      title: "Armonización Facial",
      subtitle: "Tratamientos Estéticos",
      image: armonizacion,
      description: "Procedimientos de armonización facial",
      items: [
        "Rellenos faciales",
        "Toxina botulínica",
        "Rejuvenecimiento",
        "Perfilado facial"
      ]
    },
    procedimientos: {
      title: "Procedimientos",
      subtitle: "Tratamientos Dermatológicos",
      image: procedimientos,
      description: "Diversos procedimientos dermatológicos",
      items: [
        "Tratamientos láser",
        "Peeling químico",
        "Microdermoabrasión",
        "Tratamientos corporales"
      ]
    },
    ultraformer: {
      title: "Ultraformer MPT",
      subtitle: "Tecnología Avanzada",
      image: ultraformer,
      description: "Tratamiento con ultrasonido focalizado",
      items: [
        "Lifting no quirúrgico",
        "Tensado facial",
        "Remodelación corporal",
        "Resultados duraderos"
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
                <img src={service.image} alt={service.title} />
                <button 
                  className="btn-ver-mas"
                  onClick={() => setSelectedService(key)}
                >
                  Ver más
                </button>
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
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