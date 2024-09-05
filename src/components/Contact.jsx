import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
    <div className="form-container">
     
      <div className="right-container">
        <div className="right-inner-container">
          <form action="#">
              <h2 className="lg-view">Contacto</h2>
              
            <input type="text" placeholder="Name *"  />
            <input type="email" placeholder="Email *" />
            <input type="phone" placeholder="Phone" />
            <textarea rows="4" placeholder="Message"></textarea>
              <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Contact;
