import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2>Agenda tu cita ahora</h2>
        
        <div className="contact-grid">
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <input
              type="tel"
              placeholder="Número de celular"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
            <select
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
              required
            >
              <option value="">Motivo de consulta</option>
              <option value="dermatologia">Dermatología</option>
              <option value="estetica">Estética</option>
              <option value="ultraformer">Ultraformer</option>
              <option value="otro">Otro</option>
            </select>
            <button type="submit" className="btn-primary">Enviar solicitud</button>
          </form>

          <div className="contact-info">
            <div className="info-wrapper">
              <div className="schedule">
                <h3>Horarios de atención</h3>
                <p>Lunes a Viernes: 8:00 am – 6:00 pm</p>
                <p>Sábados: 8:00 am – 1:00 pm</p>
              </div>
              <div className="location">
                <h3>Ubicación</h3>
                <p>Carrera 15 # 83-33</p>
                <p>Consultorio 510</p>
                <p>Bogotá, Colombia</p>
              </div>
            </div>
            <div className="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6751406974604!2d-74.05891492426928!3d4.667968042358891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a9e2f9b8c45%3A0x45b858f4d3c96b6c!2sCra.%2015%20%2383-33%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2s!4v1709866545781!5m2!1ses!2s"
                width="100%"
                height="300"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de SkinTeam Dermatología"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact; 