import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <section className='product-section'>
        <img className='product-image' src="/public/image/bottle.jpg" alt="botella de cabo" />
        <div className='product-content'>
        <h3>Agua de mar hipertónica 3l </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem praesentium eaque animi ea cupiditate quasi laborum, aperiam minus, illo accusantium,
             cumque optio quis itaque eum ut iure voluptatum laudantium quos!</p>
             <button>ordenar</button>
        </div>

    </section>
  );
}

export default Product;
