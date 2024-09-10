import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <section className='product-section' id="producto">
      <h2 className='slogan'>"no hay nada nuevo excepto lo que se ha olvidado"</h2>
        <article className='product-map'>
          <div className='product-map-content'>
            <h3 className='product-title-map'> Redescubri la pureza del agua de mar</h3>
            <p className='product-text-map'>
            Extraída directamente a 6 millas náuticas de la costa de Cabo Polonio. Rica en minerales esenciales, esta agua ha sido cuidadosamente recolectada para brindarte un producto natural ideal para tu bienestar.
            </p>
          </div>
        </article>
       <article className='product-call'>
        <div className='product-content'>
          <h3 className='product-title'>AGUA PURA DE CABO POLONIO</h3>
          <p className='product-text'>
          Pedi tu botella de 3lts y lleva a casa una parte del océano, directamente desde la fuente.<br />
          Nuestra agua de mar hipertónica mantiene su composición natural
          conservando todos los minerales esenciales y propiedades
          </p>
          <button className="button">
            <a href="#contacto">
            <span className="liquid"></span>  
            <span className="btn-txt">Pedir</span>
            </a>
          </button>
        </div>
        <img className='product-image' src="/image/sea-water.jpg" alt="botella de cabo" />
        </article>
      
    </section>
  );
}

export default Product;
