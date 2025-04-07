import React, { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [newComment, setNewComment] = useState('');
  const [comments] = useState([
    {
      id: 1,
      author: "María García",
      content: "¡Excelente servicio! Los tratamientos son increíbles y los resultados superaron mis expectativas. El equipo médico es muy profesional.",
      likes: 15,
      date: "2024-04-05"
    },
    {
      id: 2,
      author: "Juan Rodríguez",
      content: "Me encantó la atención profesional y los resultados. El ambiente del consultorio es muy acogedor y el personal muy amable.",
      likes: 8,
      date: "2024-04-04"
    },
    {
      id: 3,
      author: "Ana Martínez",
      content: "Recomiendo totalmente los servicios. La Dra. es muy profesional y dedicada. Los tratamientos son personalizados y efectivos.",
      likes: 12,
      date: "2024-04-03"
    }
  ]);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewComment('');
  };

  return (
    <section className="testimonials-section" id="testimonios">
      <div className="section-header">
        <h2>Experiencias de Nuestros Pacientes</h2>
        <p>Conoce lo que opinan quienes ya han confiado en nosotros</p>
      </div>
      <div className="testimonials-container">
        {/* Columna izquierda - Formulario de comentarios */}
        <div className="testimonials-form-column">
          <h3>Comparte tu Experiencia</h3>
          <form onSubmit={handleSubmit} className="testimonial-form">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Cuéntanos sobre tu experiencia con nuestros servicios..."
              rows="4"
            />
            <button type="submit" className="submit-button">
              Compartir Experiencia
            </button>
          </form>
        </div>

        {/* Columna derecha - Lista de comentarios */}
        <div className="testimonials-list-column">
          <h3>Testimonios Destacados</h3>
          <div className="testimonials-list">
            {comments.map((comment) => (
              <div key={comment.id} className="testimonial-card">
                <div className="comment-header">
                  <div className="avatar">
                    {getInitials(comment.author)}
                  </div>
                  <div className="user-info">
                    <strong>{comment.author}</strong>
                    <span className="comment-date">
                      {new Date(comment.date).toLocaleDateString('es-CO', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
                <blockquote className="testimonial-content">
                  {comment.content}
                </blockquote>
                <div className="testimonial-actions">
                  <button className="like-button">
                    <i className="fas fa-heart"></i> {comment.likes}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 