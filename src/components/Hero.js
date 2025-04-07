import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css';
import slide1 from '../Images/Hero/1.carrusel.jpg';
import slide2 from '../Images/Hero/2.carrusel.jpg';
import slide3 from '../Images/Hero/3.carrusel.jpg';
import slide4 from '../Images/Hero/4.carrusel.jpg';

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    cssEase: 'linear',
    arrows: true,
    pauseOnHover: true,
    swipeToSlide: true,
    touchThreshold: 10,
    slide: 'div'
  };

  return (
    <section id="inicio" className="hero">
      <Slider {...settings} className="hero-slider">
        {[slide1, slide2, slide3, slide4].map((slide, index) => (
          <div key={index} className="slide-container">
            <div 
              className="slide" 
              style={{ backgroundImage: `url(${slide})` }}
            >
              <div className="slide-content">
                <h1>Transforma tu piel, transforma tu vida.</h1>
                <p>Confía en dermatología médica y estética con resultados reales.</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Hero; 