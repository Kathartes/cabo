import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <video className="footer-video" autoPlay loop muted>
        <source src="/video/footer-sea.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="footer-content">
        
          <img src="/image/instagram.svg" alt="" />
          <img src="/image/facebook.svg" alt="" />
          <img src="/image/whatsapp.svg" alt="" />
        
      
        
      </div>
       

    </footer>
  );
}

export default Footer;
