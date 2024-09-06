import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <section className='product-section'>
        <img className='product-image' src="/public/image/bottle.jpg" alt="botella de cabo" />
        <div className='product-content'>
          <h2 className='product-title'>botella 3l</h2>
          <p className='product-text'>
          
          Ofrecemos agua de mar extraída a 6-7 millas náuticas de Cabo polonio. 
Dicha distancia se recorre para asegurarnos de que el resultado sea un agua lo más limpia y cristalina posible.  

Llamamos agua de mar hipertónica al agua de mar que se encuentra en sus proporciones naturales, es decir, 100% agua de mar. Su composición y estructura se mantiene como en la naturaleza, al igual que su salinidad que se encuentra en unos 36-38g/L.
</p>
          <button class="button">
            <span class="liquid"></span>  
            <span class="btn-txt">Pedir</span>
          </button>
        </div>

    </section>
  );
}

export default Product;
