import React from 'react';
import ale from "../assets/dether.png"
import "../styles/home.css"
import useTypewriter from 'react-typewriter-hook';

const Home: React.FC = () => {
  const typewriterText = useTypewriter('Fullstack Developer');
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hola, mi nombre es</h3>
        <h1>Alejandro Vargas</h1>
        <h3>y soy <span className="multiple-text">{typewriterText}</span></h3>
        <p>Me apasiona el aprendizaje constante y la exploración de nuevas tecnologías en el campo de la programación. Mi objetivo es afrontar retos que me permitan crecer y desarrollarme en este apasionante campo. Soy una persona colaboradora y disfruto trabajando en equipo para lograr resultados satisfactorios. Siempre estoy emocionado de asumir nuevos proyectos y contribuir a un equipo dinámico. ¡Estoy listo para crear soluciones innovadoras juntos!</p>
        <div className="social-media">
          {/* <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook' ></i></a> */}
          <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter' ></i></a>
          <a href="https://github.com/dether" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/alejandro-gabriel-vargas-b81445267/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin' ></i></a>
        </div>
        <a href="https://drive.google.com/file/d/1jYvgSEpYPbWCyXHJ1uSuK-nV9qGPYcxd/view" target="_blank" rel="noopener noreferrer" className="btn">Descargar CV</a>
      </div>

      <div className="home-img">
        <img src={ale} alt=""></img>
      </div>
    </section>
  );
};

export default Home;