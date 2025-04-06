import React, { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [newComment, setNewComment] = useState('');
  const [comments] = useState([
    {
      id: 1,
      author: "María García",
      content: "¡Excelente servicio! Los tratamientos son increíbles.",
      likes: 15,
      date: "2024-04-05"
    },
    {
      id: 2,
      author: "Juan Rodríguez",
      content: "Me encantó la atención profesional y los resultados.",
      likes: 8,
      date: "2024-04-04"
    },
    {
      id: 3,
      author: "Ana Martínez",
      content: "Recomiendo totalmente los servicios. ¡Muy satisfecha!",
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
    // Aquí iría la lógica para agregar el comentario
    setNewComment('');
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Columna izquierda - Formulario de comentarios */}
        <div className="testimonials-form-column">
          <h2>Deja tu opinión</h2>
          <form onSubmit={handleSubmit} className="testimonial-form">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="¿Qué opinas de nuestro servicio?"
              rows="4"
            />
            <button type="submit" className="submit-button">
              Publicar
            </button>
          </form>
        </div>

        {/* Columna derecha - Lista de comentarios */}
        <div className="testimonials-list-column">
          <h2>Opiniones destacadas</h2>
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
                      {new Date(comment.date).toLocaleDateString('es-CO')}
                    </span>
                  </div>
                </div>
                <blockquote className="testimonial-content">
                  {comment.content}
                </blockquote>
                <div className="testimonial-actions">
                  <button className="like-button">
                    <span>👍</span> {comment.likes}
                  </button>
                  <button className="reply-button">
                    Responder
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