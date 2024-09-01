import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <video className="footer-video" autoPlay loop muted>
        <source src="../../public/video/footer-sea.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="footer-content">
    
        <h2>"no hay nada nuevo excepto lo que se ha olvidado"</h2>
        
      </div>
       

    </footer>
  );
}

export default Footer;
