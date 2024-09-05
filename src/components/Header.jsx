import React from 'react';
import './Header.css';
import Navbar from './NavBar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
const Header = () => {
  return (
    <header className="hero-container">
     
     
      <Navbar />
      <video className="hero-video" autoPlay loop muted>
        <source src="../../public/video/hero-sea.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    
      <div className="hero-content">
    
        <h1><span className='cabo-title'>cabo</span> <br/> agua de mar</h1>
        
      </div>
    
      <h3 className="hero-slogan"> No hay nada nuevo excepto lo que se ha olvidado</h3>
    </header>
  );
}

export default Header;
