import React from 'react';
import './Uses.css';

const Uses = () => {

  const services = [
    {
      image: '',
      title: 'Alimentacion',
      text: 'Puede actuar como un regenerador celular y proteger el ADN.',
    },
    {
      image: '',
      title: 'Deporte',
      text: 'puede mejorar mejorar la salud del hígado y los riñones.',
    },
    {
      image: '',
      title: 'Higiene oral',
      text: 'Rica en minerales como el calcio, el magnesio, el potasio y el sodio, que son esenciales',
    },
    {
      image: '',
      title: 'Higiene nasal',
      text: 'útil en la curación de heridas, erupciones y abrasiones. Mejora de a piel como el acné, la psoriasis o la dermatitis atópica.',
    },
    {
      image: '',
      title: 'Antiseptico',
      text: 'contiene oligoelementos y antioxidantes pueden ayudar a fortalecer el sistema inmunológico y proteger al organismo de enfermedades.',
    },
    {
      image: '',
      title: 'Laxante',
      text: 'puede ayudar a hidratarla, mejorar su elasticidad y suavizar la piel seca y agrietada.',
    },
  ];
  return (
    <section className='uses-section'>
       
        
        <h2>Modos de Uso</h2>
        <article className="uses-services">
        {services.map((service, index) => (
          <div key={index} className="uses-cards">
              <h4 className="uses-cards-title">{service.title}</h4>
              <p className="uses-cards-text">{service.text}</p>
          </div>
        ))}
        </article>
             
        
       

    </section>
  );
}

export default Uses;
