import React from 'react';
import './Testimonials.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const testimonials = [
    {
      name: "María González",
      role: "Cliente Regular",
      text: "El servicio de SkinTeam ha transformado completamente mi rutina de cuidado de la piel. Los tratamientos son personalizados y los resultados son increíbles. ¡Mi piel nunca se había visto mejor!",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Cliente Corporativo",
      text: "Como profesional que está constantemente en reuniones, mantener una imagen impecable es crucial. SkinTeam no solo me ha ayudado a lograr esto, sino que también me ha enseñado la importancia del cuidado de la piel.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Influencer de Belleza",
      text: "He probado muchos servicios de estética, pero SkinTeam está en otro nivel. Su atención al detalle y el conocimiento profundo de los tratamientos más innovadores los hace únicos. ¡Los recomiendo totalmente!",
      rating: 5
    },
    {
      name: "Diego Morales",
      role: "Deportista Profesional",
      text: "Como deportista, mi piel sufre mucho por la exposición al sol y el sudor. El equipo de SkinTeam me ha ayudado a mantener mi piel saludable con tratamientos específicos para mis necesidades.",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="testimonials-section">
      <div className="testimonials-container">
        <h2>Lo que dicen nuestros clientes</h2>
        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 