import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy loading de componentes
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Partners = lazy(() => import('./components/Partners'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-skeleton">
    <div className="skeleton-wave"></div>
  </div>
);

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      <ErrorBoundary>
        <Header />
        
        <main id="main-content" className="main-content">
          <Suspense fallback={<LoadingFallback />}>
            <Hero />
            <Services />
            <AboutUs />
            <Testimonials />
            <Partners />
            <Blog />
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>

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
