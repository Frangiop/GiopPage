import { Link } from "react-router-dom";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import './CollectionPage.css'; 

export default function CollectionPage(){ 
    return(
        <div className="publicaciones-page">
        <div className="pagina-publicaciones">
          <h1>RECORRIDOS</h1>
          <div className="contenedor-flex">
            {/* Primer conjunto */}
            <div className="conjunto">
              <Link to="/collections1" className="imagen-link">
                <div className="imagen-con-recuadro">
                  <img src="/images/imagen2.jpg" alt="Imagen de Invierno" className="imagen-artistica" />
                  </div>
              </Link>
              <div className="recuadro-derecha">
                <h2>Temporada Invierno</h2>
                <p>Explora nuestra colección de obras de arte de la temporada de invierno. Descubre la belleza y la historia detrás de cada obra.</p>
              </div>
            </div>
  
            {/* Segundo conjunto */}
            <div className="conjunto">
              <Link to="/multicollections2" className="imagen-link">
                <div className="imagen-con-recuadro">
                  <img src="/images/imagen3.jpg" alt="Imagen de Verano" className="imagen-artistica" />
                </div>
              </Link>
              <div className="recuadro-derecha">
                <h2>Temporada Verano</h2>
                <p>Sumérgete en la calidez de nuestra colección de obras de la temporada de verano. Explora el arte y la cultura estivales.</p>
              </div>
            </div>
  
            {/* Tercer conjunto */}
            <div className="conjunto">
              <Link to="/publicaciones-tres" className="imagen-link">
                <div className="imagen-con-recuadro">
                  <img src="/images/imagen2.jpg" alt="Imagen adicional" className="imagen-artistica imagen-adicional" />
                </div>
              </Link>
              <div className="recuadro-derecha">
                <h2>Encuentra todas las obras del museo</h2>
                <p>Explora nuestra vasta colección de obras maestras de arte, desde pinturas y esculturas hasta artefactos históricos. Descubre la riqueza cultural del museo y sumérgete en la historia y la belleza que ofrecemos.</p>
              </div>
            </div>
  
   {/* 4 conjunto */}
   <div className="conjunto">
              <Link to="/publicaciones-tres" className="imagen-link">
                <div className="imagen-con-recuadro">
                  <img src="/images/imagen2.jpg" alt="Imagen adicional" className="imagen-artistica imagen-adicional" />
                </div>
              </Link>
              <div className="recuadro-derecha">
                <h2>Encuentra todas las obras del museo</h2>
                <p>Explora nuestra vasta colección de obras maestras de arte, desde pinturas y esculturas hasta artefactos históricos. Descubre la riqueza cultural del museo y sumérgete en la historia y la belleza que ofrecemos.</p>
              </div>
            </div>
  
     {/*
    5 conjunto 
   <div className="conjunto">
              <Link to="/publicaciones-tres" className="imagen-link">
                <div className="imagen-con-recuadro">
                  <img src="/images/imagen2.jpg" alt="Imagen adicional" className="imagen-artistica imagen-adicional" />
                </div>
              </Link>
              <div className="recuadro-derecha">
                <h2>Encuentra todas las obras del museo</h2>
                <p>Explora nuestra vasta colección de obras maestras de arte, desde pinturas y esculturas hasta artefactos históricos. Descubre la riqueza cultural del museo y sumérgete en la historia y la belleza que ofrecemos.</p>
              </div>
            </div> 
  
  
  
             6 conjunto 
             <div className="conjunto">
              <Link to="/publicaciones-tres" className="imagen-link">
                <div className="imagen-con-recuadro">
                  <img src="/images/imagen2.jpg" alt="Imagen adicional" className="imagen-artistica imagen-adicional" />
                </div>
              </Link>
              <div className="recuadro-derecha">
                <h2>Encuentra todas las obras del museo</h2>
                <p>Explora nuestra vasta colección de obras maestras de arte, desde pinturas y esculturas hasta artefactos históricos. Descubre la riqueza cultural del museo y sumérgete en la historia y la belleza que ofrecemos.</p>
              </div>
            </div>
       */}
  
          </div>
        </div>
      </div>
      )
  } 