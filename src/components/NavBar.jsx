import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='nav'>
      <div className='line-nav'></div>
      {/*Icono Whatsapp visible solo en pantallas chicas*/}
      <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
        <img src="/image/whatsapp.svg" alt="WhatsApp" />
      </a>

      <a className='menu-a' href="#producto">producto</a>
      <a className='menu-a' href="#usos">usos</a>
      <img className='logo' src="/image/logo-mar.png" alt="" />
      <a className='menu-a' href="#beneficios">beneficios</a>
      <a className='menu-a' href="#contacto">contacto</a>
   

      {/*Menu hamburguesa*/}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>


      {/*Enlaces del menu hamburguesa*/}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a className='burguer-a' href="#producto">Producto</a>
        <a className='burguer-a' href="#usos">Usos</a>
        <a className='burguer-a' href="#beneficios">Beneficios</a>
        <a className='burguer-a' href="#contacto">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
