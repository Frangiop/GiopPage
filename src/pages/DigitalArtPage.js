
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './DigitalArtPage.css';

export default function DigitalArtPage(){ 

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Muestra una diapositiva a la vez
        slidesToScroll: 1, // Desplaza una diapositiva a la vez
        autoplay: true,
        autoplaySpeed: 3000,
      };
    

  return(
    <div className="arte-digital-container">
    <a href="/tu-pagina-de-destino" className="enlace-imagen">
      <img src="/images/imagen1.png" alt="Imagen de enlace" />
    </a>

    <Slider {...settings} className="carrusel-imagenes">
      <div>
        <img src="/casemiro/cap1/cas 1.png" alt="Imagen 1" />
      </div>
      <div>
        <img src="/casemiro/cap1/cas 2.png" alt="Imagen 2" />
      </div>
      <div>
        <img src="/casemiro/cap1/cas 3.png" alt="Imagen 3" />
      </div>
      {/* Agrega más imágenes según tus necesidades */}
    </Slider>

    <div className="imagenes-adicionales"> {/* imagenes de abajo*/}
      <img src="/images/imagen4.jpg" alt="Imagen 4" />
      <img src="/images/imagen3.jpg" alt="Imagen 5" />
      <img src="/images/imagen2.jpg" alt="Imagen 6" />
      <img src="/images/imagen1.png" alt="Imagen 7" />
    </div>
  </div>
    )
} 