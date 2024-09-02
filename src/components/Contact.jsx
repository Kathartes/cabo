import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
    <div className="form-container">
      <div className="left-container">
        <div className="left-inner-container">
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repudiandae minus quod praesentium sed molestias amet beatae 
            adipisci velit officiis unde ipsa aspernatur libero,
             numquam dolores quam rem illum aliquid quaerat.</p>
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
