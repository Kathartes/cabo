import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <section className='product-section'>
        <img className='product-image' src="/public/image/bottle.jpg" alt="botella de cabo" />
        <div className='product-content'>
          <h2 className='product-title'>botella 3l</h2>
          <p className='product-text'>
          – Extraida a 6 millas nauticas del faro de Cabo Polonio<br/>
          – 100% Agua de mar.<br/>
          – Nivel de salinidad 4 veces superior al de nuestro cuerpo.<br/>
          – Se recomienda beber hasta 0,5l al día.</p>
              <button className='product-button'>pedir</button>
        </div>

    </section>
  );
}

export default Product;
