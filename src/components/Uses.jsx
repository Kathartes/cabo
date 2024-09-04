import React from 'react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



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
    {
      image: '',
      title: 'Descongelar mariscos',
      text: 'puede ayudar a hidratarla, mejorar su elasticidad y suavizar la piel seca y agrietada.',
    },
  ];
  return (
    <section className='uses-section'>
       
        
        <h2>Modos de Uso</h2>
        <div className="uses-container">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {services.map((service, index) => (
          <SwiperSlide>
            <div key={index} className="uses-cards">
              <div className="uses-cards-content">
                <h4 className="uses-cards-title">{service.title}</h4>
                <p className="uses-cards-text">{service.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
         <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </div>
    </section>
  );
}

export default Uses;
