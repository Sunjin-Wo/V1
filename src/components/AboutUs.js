import React, { useState } from 'react';
import './AboutUs.css';
import draAngela from '../Images/Perfiles de Doctores/dra-angela.jpg';
import draCristina from '../Images/Perfiles de Doctores/Perfil-Doctor-Cristina-Castrillon.png';
import drManuel from '../Images/Perfiles de Doctores/Perfil-Doctor-Manuel-Santiago.png';
import draCarolina from '../Images/Perfiles de Doctores/Perfil-Doctor-Carolina-Pinzon.png';

function AboutUs() {
  const doctors = [
    {
      name: "Dra. Angela",
      department: "DERMATOLOGÍA ESTÉTICA",
      image: draAngela,
      facebook: "#",
      twitter: "#",
      instagram: "#"
    },
    {
      name: "Dra. Cristina Castrillon",
      department: "DERMATOLOGÍA CLÍNICA",
      image: draCristina,
      facebook: "#",
      twitter: "#",
      instagram: "#"
    },
    {
      name: "Dr. Manuel Santiago",
      department: "DERMATOLOGÍA QUIRÚRGICA",
      image: drManuel,
      facebook: "#",
      twitter: "#",
      instagram: "#"
    },
    {
      name: "Dra. Carolina Pinzon",
      department: "DERMATOLOGÍA PEDIÁTRICA",
      image: draCarolina,
      facebook: "#",
      twitter: "#",
      instagram: "#"
    }
  ];

  const DoctorCard = ({ doctor }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className="doctor-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="doctor-image">
          <img 
            src={doctor.image} 
            alt={doctor.name}
            loading="lazy"
          />
          <div className={`social-links ${isHovered ? 'visible' : ''}`}>
            <a 
              href={doctor.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visita el perfil de Facebook de ${doctor.name}`}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href={doctor.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visita el perfil de Twitter de ${doctor.name}`}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a 
              href={doctor.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Visita el perfil de Instagram de ${doctor.name}`}
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="doctor-info">
          <h3>{doctor.name}</h3>
          <p className="doctor-department">{doctor.department}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="nosotros" className="about-us">
      <div className="about-header">
        <div className="container">
          <h2 className="section-title">Un equipo que cuida tu piel con ciencia y calidez</h2>
          <p className="section-subtitle">
            SkinTeam fue fundado con la visión de brindar atención dermatológica de excelencia. 
            Somos médicos dermatólogos especializados en salud cutánea y armonización facial. 
            Creemos en la atención personalizada, ética y basada en evidencia científica.
          </p>
        </div>
      </div>
      
      <div className="container">
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs; 