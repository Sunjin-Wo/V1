import React from 'react';
import './AboutUs.css';

function AboutUs() {
  const doctors = [
    {
      name: "Dra. Angela",
      image: require('../Images/Perfiles de Doctores/dra-angela.jpg'),
    },
    {
      name: "Dra. Cristina Castrillon",
      image: require('../Images/Perfiles de Doctores/Perfil-Doctor-Cristina-Castrillon.png'),
    },
    {
      name: "Dr. Manuel Santiago",
      image: require('../Images/Perfiles de Doctores/Perfil-Doctor-Manuel-Santiago.png'),
    },
    {
      name: "Dra. Carolina Pinzon",
      image: require('../Images/Perfiles de Doctores/Perfil-Doctor-Carolina-Pinzon.png'),
    }
  ];

  return (
    <section id="nosotros" className="about-us">
      <div className="container">
        <h2>Un equipo que cuida tu piel con ciencia y calidez</h2>
        <p>
          SkinTeam fue fundado con la visión de brindar atención dermatológica de excelencia. 
          Somos médicos dermatólogos especializados en salud cutánea y armonización facial. 
          Creemos en la atención personalizada, ética y basada en evidencia científica.
        </p>
        
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <img src={doctor.image} alt={doctor.name} />
              <h3>{doctor.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs; 