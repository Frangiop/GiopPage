import React from 'react';
import PropTypes from 'prop-types';
import './FooterComponent.css'; 

const FooterComponent = () =>  { 
  return ( 
    <div className="footer">
    <div className="container">
      <p>&copy; 2023 Tu Nombre</p>
      <p>Contáctanos: <a href="mailto:contacto@tudominio.com">contacto@tudominio.com</a></p>
      <div className="social-icons">
        <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        {/* Agrega más iconos y enlaces a otras redes sociales según sea necesario */}
      </div>
    </div>
  </div>
)
 };

FooterComponent.propTypes = {};

FooterComponent.defaultProps = {};

export default FooterComponent;
