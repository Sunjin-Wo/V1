import React, { useEffect } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Lazy loading images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }, []);

  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      <Header />
      
      <main id="main-content">
        <Hero />
        <Services />
        <AboutUs />
        <Partners />
        <Blog />
        <Contact />
        <Testimonials />
      </main>

      <Footer />

      <a 
        href="https://wa.me/+573XXXXXXXXX"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <i className="fab fa-whatsapp"></i> Agenda tu cita
      </a>
    </div>
  );
}

export default App;
