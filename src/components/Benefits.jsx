import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const services = [
    {
      image: '/public/image/regeneracion.png',
      title: 'Regeneracion',
      text: 'Puede actuar como un regenerador celular y proteger el ADN.',
    },
    {
      image: '/public/image/toxina.png',
      title: 'Eliminación de toxinas:',
      text: 'puede mejorar mejorar la salud del hígado y los riñones.',
    },
    {
      image: '/public/image/hidratacion.png',
      title: 'Hidratacion',
      text: 'Rica en minerales como el calcio, el magnesio, el potasio y el sodio, que son esenciales',
    },
    {
      image: '/public/image/cicatrizacion.png',
      title: 'Cicatrización',
      text: 'útil en la curación de heridas, erupciones y abrasiones. Mejora de a piel como el acné, la psoriasis o la dermatitis atópica.',
    },
    {
      image: '/public/image/inmune.png',
      title: 'Sistema inmunológico',
      text: 'contiene oligoelementos y antioxidantes pueden ayudar a fortalecer el sistema inmunológico y proteger al organismo de enfermedades.',
    },
    {
      image: '/public/image/piel.png',
      title: 'Salud de la piel',
      text: 'puede ayudar a hidratarla, mejorar su elasticidad y suavizar la piel seca y agrietada.',
    },
  ];
  return (
    <section className='benefits-section'>
      <div className='benefits-layer'>
      <h2 className='benefits-title'>beneficios</h2>
        <article className="benefits-services">
        {services.map((service, index) => (
          <div key={index} className="benefits-cards">
              <img src={service.image} alt="" />
              <h4 className="benefits-cards-title">{service.title}</h4>
              <p className="benefits-cards-text">{service.text}</p>
          </div>
        ))}
        </article>
      </div>
    </section>
  );
}

export default Benefits;
