import React from 'react';
import PropTypes from 'prop-types';


const Collections1Component = () => (
  <div className="collectionContainer"> {/* Aplica la clase CSS a la div principal */}
  {collections.map((collection) => (
    <div className="collectionItem" key={collection.id}> {/* Aplica la clase CSS a cada elemento de colección */}
      <div className="collectionImage">
        <img src={collection.cover} alt={collection.title} />
      </div>
      <div className="collectionInfo">
        <h2>{collection.title}</h2>
        <p>Descripción u otros detalles</p>
      </div>
    </div>
  ))}
</div>  
);

Collections1Component.propTypes = {};

Collections1Component.defaultProps = {};

export default Collections1Component;