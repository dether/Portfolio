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

    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: "bottom" });

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






/* // @ts-nocheck 
import React, { useEffect } from 'react';
import ScrollReveal from "scrollreveal"
import Typed from 'typed.js';


const Script: React.FC = () => {
  useEffect(() => {
    let typed: Typed | undefined;
    //==================== toggle icon navbar ====================
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
      menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      });
    }

    //==================== scroll sections active link ====================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            const targetLink = document.querySelector(`header nav a[href*="${id}"]`);
            targetLink?.classList.add("active");
          });
        }
      });

      //==================== sticky navbar ====================/
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", top > 100);
      }

      //==================== remove toggle icon and navbar when click navbar link (scroll) ====================//
      if (menuIcon && navbar) {
        navLinks.forEach((link) => {
          link.addEventListener("click", () => {
            menuIcon.classList.remove("bx-x");
            navbar.classList.remove("active");
          });
        });
      }
    });

    //==================== scroll reveal ====================//
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: "top" });

    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: "bottom" });

    ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });

    ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });

    //==================== typed js ====================//
    if (typeof Typed !== 'undefined') {
      typed = new Typed(".multiple-text", {
        strings: ["Fullstack Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    }

    // Leer el valor de la variable "typed" al menos una vez para evitar el mensaje de advertencia
  }, []);

  
  return null; // No necesitamos renderizar nada en este componente
};

export default Script;
 */