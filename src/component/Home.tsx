import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import ale from "../assets/dether.png"
import "../styles/home.css"

const EMAIL = import.meta.env.VITE_EMAIL;

const Home: React.FC = () => {
  
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = EMAIL;
    navigator.clipboard.writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error al copiar la dirección de correo electrónico:', error);
      });
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hola, mi nombre es</h3>
        <h1>Alejandro Vargas</h1>
        <h3>
          y soy{' '}
          <span className="multiple-text" style={{ display: 'inline-block' }}>
            <Typewriter
              options={{
                strings: [' Fullstack Developer'], // Agregamos un espacio al principio para evitar espacio entre "y soy" y "Fullstack Developer"
                loop: true, // Agregamos loop a true para que la animación se repita infinitamente
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('Fullstack Developer') // Eliminamos la primera aparición de "Fullstack Developer"
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </h3>
        
        <div className="social-media">
          
          <a href="https://twitter.com/Dether_49" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter' ></i></a>
          <a href="https://github.com/dether" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/alejandro-gabriel-vargas-b81445267/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin' ></i></a>
          <a href="https://wa.me/+5493644270614" target="_blank" rel="noopener noreferrer"><i className='bx bxl-whatsapp' ></i></a>
          <a onClick={handleCopyEmail}><i className='bx bxl-gmail'></i></a>
          {isCopied && (
        <span className="copied-message">
          Copiado
        </span>
      )}
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