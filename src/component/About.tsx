import React from "react";
import ale from "../assets/ale2.png";
import "../styles/about.css";

const About: React.FC = () => {
	return (
		<section className="about" id="about">
			<div className="about-img">
				<img src={ale} alt=""></img>
			</div>

			<div className="about-content">
				<h2 className="heading">
					Acerca de <span>mí</span>
				</h2>
				<h3>Fullstack Web Developer!</h3>
				<p>
					Hola, soy Alejandro, una persona apasionada por el aprendizaje
					constante y la exploración de nuevas tecnologías en el campo de la
					programación. Además de mi enfoque en el desarrollo web, también he
					estado colaborando en el negocio familiar, administrando un mercado,
					una tienda de ropa y el alquiler de departamentos. Mi enfoque
					principal es crecer y desarrollarme como desarrollador web Fullstack. 
					Estoy buscando oportunidades que me permitan adquirir experiencia
					profesional y seguir mejorando como desarrollador web. Estoy abierto a
					nuevas propuestas y disponible para contactar a través de mi correo
					electrónico y mi número de teléfono. ¡Espero poder contribuir a tu
					equipo y hacer cosas increíbles juntos!
				</p>
				{/* <a href="#" className="btn">
					Read More
				</a> */}
			</div>
		</section>
	);
};
export default About;
