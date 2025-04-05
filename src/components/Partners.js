import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Partners.css';

function Partners() {
  const partners = [
    {
      name: "SVR",
      imageUrl: "https://ext.same-assets.com/493409551/3969859790.jpeg"
    },
    {
      name: "Galderma",
      imageUrl: "https://ext.same-assets.com/493409551/3075265637.jpeg"
    },
    {
      name: "Merz",
      imageUrl: "https://ext.same-assets.com/493409551/17726338.jpeg"
    },
    {
      name: "Allergan",
      imageUrl: "https://ext.same-assets.com/493409551/3426664476.jpeg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="partners-section" id="aliados">
      <div className="container">
        <h2 className="section-title">Nuestros Aliados</h2>
        
        <div className="partners-carousel">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="partner-slide">
                <div className="partner-card">
                  <img 
                    src={partner.imageUrl} 
                    alt={`Logo de ${partner.name}`}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Partners; 