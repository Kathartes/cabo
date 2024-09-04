import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
    <div className="form-container">
      <div className="left-container">
        <div className="left-inner-container">
        
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d113181.87875796523!2d-53.836154003309034!3d-34.3870143405052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzTCsDIzJzQxLjUiUyA1M8KwNDEnMDQuOCJX!5e1!3m2!1ses!2suy!4v1725401410157!5m2!1ses!2suy"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de Google"
      ></iframe>

      </div>
        </div>
      <div className="right-container">
        <div className="right-inner-container">
          <form action="#">
              <h2 className="lg-view">Contacto</h2>
        <h2 className="sm-view">Contacto</h2>
             
              <div className="social-container">
                  <a href="#" className="social">asdasd<i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social">asdasd<i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social">asdasd<i className="fab fa-linkedin-in"></i></a>
              </div>
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
