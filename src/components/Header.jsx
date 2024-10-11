import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Iconos de sol y luna
import '../styles/header.css'; // Estilos CSS

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="header">
      <div className="logo"> {/* Logo */}
        {/* <img src="logo.png" alt="Logo" /> */}
      </div>
      <nav className="nav"> {/* Barra de Navegación */}
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <div className="theme-switcher">
        {/* Botón para cambiar de tema con icono */}
        <button onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
