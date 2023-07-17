import React, { useEffect } from 'react';
import { Events, scrollSpy } from 'react-scroll';
import ScrollReveal from 'scrollreveal';


const Script: React.FC = () => {
  useEffect(() => {
    /*==================== scroll reveal ====================*/
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: "top" });

    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skill-container', { origin: "bottom" });

    ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });

    ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });

    /*==================== scroll sections active link ====================*/
    Events.scrollEvent.register('begin', () => {
      // Agrega aquí cualquier lógica adicional que desees ejecutar al inicio del desplazamiento
    });

    Events.scrollEvent.register('end', () => {
      // Agrega aquí cualquier lógica adicional que desees ejecutar al final del desplazamiento
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return null;
};

export default Script;