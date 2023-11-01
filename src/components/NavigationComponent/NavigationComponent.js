
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './NavigationComponent.css'; 

const NavigationComponent = () => { 

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

  // Determina la cantidad de píxeles que el usuario debe desplazarse hacia abajo antes de ocultar la barra de navegación
  const scrollThreshold = 170;

  const visible = prevScrollPos > currentScrollPos || currentScrollPos < scrollThreshold;

  setVisible(visible);
  setPrevScrollPos(currentScrollPos);
};
window.addEventListener('scroll', handleScroll);


return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, [prevScrollPos]);

// Ocultar la barra de navegación cuando scrollingDown es true
const navClass = visible ? 'navbar' : 'navbar hidden';
return (
  <div className={navClass}>
  <div className="logo">
  <div>Giop</div>
  </div>
      <div className="line"></div>
      <div className="nav-links">
   
<Link to='/artist' className="nav-link" > Artist</Link> 
<Link to='/collections' className="nav-link" >Collections</Link>  
<Link to='/digital-art'className="nav-link" >Digital Art</Link>
</div>
    </div>
)
 };

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
