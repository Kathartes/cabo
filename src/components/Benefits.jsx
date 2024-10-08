import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const services = [
    {
      image: '/image/regeneracion.png',
      title: 'Regeneracion',
      text: 'Puede actuar como un regenerador celular y proteger el ADN.',
    },
    {
      image: '/image/toxina.png',
      title: 'Eliminación de toxinas:',
      text: 'puede mejorar mejorar la salud del hígado y los riñones.',
    },
    {
      image: '/image/hidratacion.png',
      title: 'Hidratacion',
      text: 'Rica en minerales como el calcio, el magnesio, el potasio y el sodio, que son esenciales',
    },
    {
      image: '/image/cicatrizacion.png',
      title: 'Cicatrización',
      text: 'útil en la curación de heridas, erupciones y abrasiones. Mejora de a piel como el acné, la psoriasis o la dermatitis atópica.',
    },
    {
      image: '/image/inmune.png',
      title: 'Sistema inmunológico',
      text: 'contiene oligoelementos y antioxidantes que ayudan a fortalecer el sistema inmunológico y proteger al organismo de enfermedades.',
    },
    {
      image: '/image/piel.png',
      title: 'Salud de la piel',
      text: 'puede ayudar a hidratarla, mejorar su elasticidad y suavizar la piel seca y agrietada.',
    },
  ];
  return (
    <section className='benefits-section' id="beneficios">
      <div className='benefits-layer'>
      <h2 className='benefits-title'>beneficios</h2>
        <article className="benefits-services">
        {services.map((service, index) => (
          <div key={index} className="benefits-cards">
            <div className="benefits-cards-content">
              <img src={service.image} alt="" />
              <h4 className="benefits-cards-title">{service.title}</h4>
              <p className="benefits-cards-text">{service.text}</p>
              </div>
          </div>
        ))}
        </article>
      </div>
    </section>
  );
}

export default Benefits;
