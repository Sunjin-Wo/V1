import React from 'react';
import './App.css';
import logo from './Images/logo-skin.jpg';

// Import components (we'll create these next)
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Fixed WhatsApp button */}
      <a 
        href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        Agenda tu cita
      </a>

      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
