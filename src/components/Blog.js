import React from 'react';
import './Blog.css';
import imgBotox from '../Images/Blog/high-angle-doctor-injecting-patient.jpg';
import imgSkinCare from '../Images/Blog/girl-applying-herself-cosmetic-product.jpg';
import imgDiagnostic from '../Images/Blog/female-doctor-diagnosing-melanoma-body-female-patient.jpg';

function Blog() {
  const articles = [
    {
      title: "Cuidados esenciales para la piel en Bogotá",
      excerpt: "Descubre cómo proteger tu piel del clima variable de la ciudad y mantenerla saludable con nuestros consejos profesionales...",
      image: imgSkinCare,
      date: "2024-04-05"
    },
    {
      title: "Todo sobre el tratamiento con Ultraformer",
      excerpt: "Conoce los beneficios y resultados de este innovador tratamiento no invasivo para rejuvenecimiento facial...",
      image: imgDiagnostic,
      date: "2024-04-04"
    },
    {
      title: "Mitos y verdades sobre el Botox",
      excerpt: "Desmitificamos las creencias más comunes sobre la toxina botulínica y sus aplicaciones en medicina estética...",
      image: imgBotox,
      date: "2024-04-03"
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2>Blog de Dermatología</h2>
        <div className="blog-grid">
          {articles.map((article, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <img src={article.image} alt={article.title} loading="lazy" />
              </div>
              <div className="blog-content">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('es-CO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <button className="btn-primary">Leer más</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog; 