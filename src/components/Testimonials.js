import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      text: "Mi piel cambió por completo, me devolvieron la confianza. 100% recomendados.",
      author: "Carolina M."
    },
    {
      text: "Profesionales con experiencia y humanidad. Los mejores tratamientos.",
      author: "Andrés T."
    },
    {
      text: "Desde la primera cita noté la diferencia. ¡Gracias SkinTeam!",
      author: "Laura R."
    }
  ];

  return (
    <section id="testimonios" className="testimonials">
      <div className="container">
        <h2>Lo que dicen nuestros pacientes</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 