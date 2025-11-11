import React from "react";
//import ale from "../assets/Dether-removebg-preview.png";
import logo from "../assets/ale_2025.png";
import "../styles/about.css";

const About: React.FC = () => {
	return (
		<section className="about" id="about">
			<div className="about-img">
				<img src={logo} alt=""></img>
			</div>

			<div className="about-content">
				<h2 className="heading">
					Acerca de <span>mí</span>
				</h2>
				<p>
					Soy Full Stack Developer en formación, con enfoque en desarrollo web. Actualmente estudio la Tecnicatura Superior en Desarrollo de Software (2° año) y participo en proyectos académicos reales donde aplico metodologías ágiles y trabajo en equipo.{" "}
				</p>
				<p>
					Entre febrero de 2025 y la actualidad colaboro en el desarrollo de <strong>SAM</strong>, una plataforma institucional para gestión académica (en progreso). Además, completé la segunda etapa del Informatorio donde desarrollé <strong>IntéGrate</strong>, una red social con sistema de autenticación, publicaciones y comentarios.{" "}
				</p>
				<p>
					Estoy ampliando mis habilidades hacia desarrollo móvil con Android Studio y reforzando conceptos de UI/UX para mejorar la experiencia de usuario en mis proyectos.
				</p>
				<p>
					Busco seguir creciendo profesionalmente y aplicar mis conocimientos en soluciones útiles y sostenibles.
				</p>
			</div>
		</section>
	);
};
export default About;
