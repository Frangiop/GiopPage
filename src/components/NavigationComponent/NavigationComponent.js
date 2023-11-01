import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const NavigationComponent = () => { 
return (
<div>
<Link to='/artist'> Artist</Link> 
<Link to='/collections'>Collections</Link>  
<Link to='/digital-art'>Digital Art</Link>

  </div>
)
 };

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;
