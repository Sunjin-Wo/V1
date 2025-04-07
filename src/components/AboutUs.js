import React, { useState } from 'react';
import './AboutUs.css';
import draAngela from '../Images/Perfiles de Doctores/dra-angela.jpg';
import draCristina from '../Images/Perfiles de Doctores/Perfil-Doctor-Cristina-Castrillon.png';
import drManuel from '../Images/Perfiles de Doctores/Perfil-Doctor-Manuel-Santiago.png';
import draCarolina from '../Images/Perfiles de Doctores/Perfil-Doctor-Carolina-Pinzon.png';

function AboutUs() {
  const doctors = [
    {
      name: "Dra. Angela Rocío Hernández Arena",
      department: "DERMATOLOGÍA ESTÉTICA",
      image: draAngela,
      role: "Médico CEO SkinTeam",
      description: `Médica y Cirujana de la Pontificia Universidad Javeriana
Ortopedista y Traumatóloga: Universidad El Bosque`
    },
    {
      name: "Dra. Cristina Ángel Castrillón",
      department: "DERMATOLOGÍA CLÍNICA",
      image: draCristina,
      description: `– Médica y cirujana de la Universidad de Antioquia
– Diplomado en Medicina estética Euroinnova Business Center
– Máster en nutrición y alimentación universidad de Barcelona`
    },
    {
      name: "Dr. Manuel Santiago Moreno Castro",
      department: "DERMATOLOGÍA QUIRÚRGICA",
      image: drManuel,
      description: `– Médico Especialista en Dermatología de la Universidad ICESI de Cali.
– ⁠Reconocido por el Colegio Iberoamericano de Dermatología como uno de los mejores médicos residentes de Colombia y destacados de Hispanoamérica.`
    },
    {
      name: "Dra. Carolina Pinzón Rodríguez",
      department: "DERMATOLOGÍA PEDIÁTRICA",
      image: draCarolina,
      description: `– Médico y cirujana general de la Fundación Universitaria Juan N. Corpas
– Especialista en Epidemiología de la UNAB
– Diplomado Medicina estética Universidad – FUCS
– Diplomado en Nutriología – ACICME
– Máster en medicina práctica clínica UDIMA- España`
    }
  ];

  const DoctorCard = ({ doctor, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const isEven = index % 2 === 0;

    const formatDescription = (description) => {
      return description.split('\n').filter(line => line.trim() !== '');
    };

    return (
      <div 
        className={`doctor-card ${isEven ? 'info-right' : 'info-left'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="doctor-image">
          <div className={`image-placeholder ${imageLoaded ? 'hidden' : ''}`}>
            <div className="loading-spinner"></div>
          </div>
          <img 
            src={doctor.image} 
            alt={doctor.name}
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          <div className={`info-overlay ${isHovered ? 'visible' : ''}`}>
            <div className="doctor-details">
              {doctor.role && (
                <h4 className="doctor-role">{doctor.role}</h4>
              )}
              <div className="doctor-description">
                {formatDescription(doctor.description).map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
              </div>
            </div>
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
            <DoctorCard key={index} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs; 