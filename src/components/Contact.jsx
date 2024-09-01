import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div class="container">
    <div class="form-container">
      <div class="left-container">
        <div class="left-inner-container">
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repudiandae minus quod praesentium sed molestias amet beatae 
            adipisci velit officiis unde ipsa aspernatur libero,
             numquam dolores quam rem illum aliquid quaerat.</p>
      </div>
        </div>
      <div class="right-container">
        <div class="right-inner-container">
          <form action="#">
              <h2 class="lg-view">Contacto</h2>
        <h2 class="sm-view">Let's Chat</h2>
             
              <div class="social-container">
                  <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                  <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
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
