import React, { useState, useEffect } from 'react';
import "../styles/navbar.css"
import { Link } from 'react-scroll/modules';
import HamburgerMenu from 'react-hamburger-menu';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const currentPos = window.pageYOffset + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (currentPos >= offset && currentPos < offset + height) {
          setCurrentSection(id || "home");
          break;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
    <Link to="home" smooth={true} className={`logo ${currentSection === "home" ? "active" : ""}`}>Portafolio</Link>

    {windowWidth <= 900 ? (
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={() => setIsOpen(!isOpen)}
        width={24}
        height={16}
        strokeWidth={2}
        rotate={0}
        color="#ffff"
        borderRadius={0}
        animationDuration={0.5}
      />
    ) : null}

    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <Link to="home" smooth={true} className={`nav-link ${currentSection === "home" ? "active" : ""}`}>Inicio</Link>
      <Link to="about" smooth={true} className={`nav-link ${currentSection === "about" ? "active" : ""}`}>Acerca de</Link>
      <Link to="skills" smooth={true} className={`nav-link ${currentSection === "skills" ? "active" : ""}`}>Habilidades</Link>
      {/* <Link to="services" smooth={true} className={`nav-link ${currentSection === "services" ? "active" : ""}`}>Services</Link> */}
      <Link to="portfolio" smooth={true} className={`nav-link ${currentSection === "portfolio" ? "active" : ""}`}>Portafolio</Link>
      <Link to="contact" smooth={true} className={`nav-link ${currentSection === "contact" ? "active" : ""}`}>Contacto</Link>
    </nav>
  </header>
  );
};

export default Navbar;
/* import React from 'react';
import "../styles/navbar.css"

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar; */