import React, { useEffect, Suspense } from 'react';
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
import ErrorBoundary from './components/ErrorBoundary';

// componente principal de la aplicacion
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
      
      <ErrorBoundary>
        <Header />
        
        <main id="main-content">
          <Suspense fallback={<div className="loading">Cargando...</div>}>
            <Hero />
            <Services />
            <AboutUs />
            <Testimonials />
            <Partners />
            <Blog />
            <Contact />
          </Suspense>
        </main>

        <Footer />

        <a 
          href="https://wa.me/+573XXXXXXXXX"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <div className="float-content">
            <span>Agenda tu cita</span>
          </div>
        </a>
      </ErrorBoundary>
    </div>
  );
}

export default App;
