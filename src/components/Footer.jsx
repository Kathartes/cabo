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
        
          <img src="/public/image/instagram.svg" alt="" />
          <img src="/public/image/facebook.svg" alt="" />
          <img src="/public/image/whatsapp.svg" alt="" />
        
      
        
      </div>
       

    </footer>
  );
}

export default Footer;
