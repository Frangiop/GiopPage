import React from 'react';
import FooterComponent from "../components/FooterComponent/FooterComponent";
import { Parallax } from 'react-parallax';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ArtistPage.css'; 

export default function ArtistPage(){ 
    return(
        <div className="artist-page" style={{ marginTop: '60px' }}>

        <video autoPlay loop className="video-overlay">  {/* aqui agrego video n  */}   
                <source src="/video/s.mp4" type="video/mp4" />
                Tu navegador no admite el elemento de video.
              </video>
        
        
              <div className="contenedor-imagenes-artisticas">
                <div style={{ height: '50vh' }}>
                  <h1 className="titulo-principal">Bienvenido al Museo</h1>
                  {window.innerWidth < 768 ? (
                    <Carousel showArrows={true} showThumbs={false}>
                      <div>
                        <img src="/images/imagen2.jpg" alt="Imagen 2" />
                      </div>
                      <div>
                        <img src="/images/imagen3.jpg" alt="Imagen 3" />
                      </div>
                      <div>
                        <img src="/images/imagen4.jpg" alt="Imagen 4" />
                      </div>
                      <div>
                        <img src="/images/imagen3.jpg" alt="Imagen 3" />
                      </div>
                    </Carousel>
                  ) : (
        
                    
                    <div className="imagenes-artisticas">
                      <img src="/images/imagen2.jpg" alt="Imagen 2" />
                      <img src="/images/imagen3.jpg" alt="Imagen 3" />
                      <img src="/images/imagen4.jpg" alt="Imagen 4" />
                      <img src="/images/imagen3.jpg" alt="Imagen 3" />
                    </div>
                  )}
                </div>
              </div>
        
              <div className="texto-entre-imagenes">
                <p>
                  Explora la belleza del arte en nuestro museo. Déjate llevar por la creatividad y la expresión artística.
                </p>
              </div>
        
              <Parallax bgImage="/images/imagen1.png" strength={500}>
                <div style={{ height: '50vh' }}>
                  {/* Contenido aquí */}
                </div>
              </Parallax>
        
              <div className="texto-estilo-artistico">
          <p>
            <span className="artistic-text">Comienzos</span>, <span className="artistic-text">cuadros antiguos</span>, <span className="artistic-text">acrílico</span>
          </p>
        </div>
              <div className="contenedor-louvre">
                <div className="imagen-louvre imagen1">
                  <img src="/images/imagen1.png" alt="Imagen 5" />
                </div>
                <div className="imagen-louvre imagen2">
                  <img src="/images/imagen2.jpg" alt="Imagen 6" />
                </div>
                <div className="imagen-louvre imagen3">
                  <img src="/images/imagen4.jpg" alt="Imagen 7" />
                </div>
                <div className="imagen-louvre imagen4">
                  <img src="/images/imagen3.jpg" alt="Imagen 8" />
                </div>
                <div className="imagen-louvre imagen5">
                  <img src="/images/imagen2.jpg" alt="Imagen 9" />
                </div>
                <div className="imagen-louvre imagen6">
                  <img src="/images/imagen1.png" alt="Imagen 10" />
                </div>
                <div className="imagen-louvre imagen7">
                  <img src="/images/imagen2.jpg" alt="Imagen 11" />
                </div>
                <div className="imagen-louvre imagen8">
                  <img src="/images/imagen3.jpg" alt="Imagen 12" />
                </div>
                <div className="imagen-louvre imagen2">
                  <img src="/images/imagen2.jpg" alt="Imagen 6" />
                </div>
                
              </div>
            
            </div>

      )
  } 