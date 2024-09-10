import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container" id="contacto">
    <div className="form-container">
      <div className='left-container'>

      </div>
     
          <form className="form" action="#">
              <h2 className="lg-view">Contacto</h2>
            <input type="text" placeholder="Nombre"  />
            <input type="email" placeholder="Email" />
            <input type="phone" placeholder="Telefono" />
            <textarea rows="4" placeholder="Mensage"></textarea>
            <button className="button">
            <span className="liquid"></span>  
            <span className="btn-txt">enviar</span>
          </button>
          </form>
     
    </div>
  </div>
  );
}

export default Contact;
