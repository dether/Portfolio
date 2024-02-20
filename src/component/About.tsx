import React from "react";
import ale from "../assets/Dether-removebg-preview.png";
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
				<p>
					Soy un apasionado del aprendizaje constante y la exploración de nuevas
					tecnologías en el campo de la programación. Mi objetivo es enfrentar
					retos que me permitan crecer y desarrollarme como desarrollador web
					Fullstack. Con background en administración y atención al cliente, he
					desarrollado habilidades interpersonales que me permiten colaborar
					efectivamente en equipos.{" "}
				</p>
				<p>
					He trabajado tanto en proyectos individuales como grupales, utilizando
					metodologías ágiles como Scrum, y dominando tecnologías como
					Typescript, React, y Express.{" "}
				</p>
				<p>
					Actualmente, estoy buscando oportunidades que me permitan adquirir
					experiencia profesional y seguir mejorando mis habilidades en el
					desarrollo web.
				</p>
				<p>
					¡Espero poder aportar mis conocimientos y experiencia a tu equipo y
					lograr cosas increíbles juntos!
				</p>
			</div>
		</section>
	);
};
export default About;
