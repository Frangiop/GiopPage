import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections } from '../../store/collections/actions';


const Collections3Component = () => { 
  const dispatch = useDispatch();
  const { collections, loadingCollections } = useSelector((state) => state.CollectionsReducer);

  useEffect(() => {
    // Llama a la acción para obtener los posts
    dispatch(getCollections());
  }, []);


  return ( 
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
   )
  };
  
Collections3Component.propTypes = {};

Collections3Component.defaultProps = {};

export default Collections3Component;
