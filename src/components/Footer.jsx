import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Iconos de redes sociales
import '../styles/header.css'; // Estilos CSS

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="footer" style={{
      backgroundColor: isDarkMode ? '#2d3748' : '#f7fafc',
      color: isDarkMode ? '#ffffff' : '#000000',
    }}>
      <div className="social-icons">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
      </div>
      <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
