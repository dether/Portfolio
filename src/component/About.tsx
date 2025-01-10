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
					Soy un apasionado del aprendizaje continuo y de explorar
					nuevas tecnologías en el campo de la programación. Mi
					objetivo es enfrentar retos que me permitan crecer y
					desarrollarme como desarrollador web Fullstack. Con una
					formación en administración y atención al cliente, he
					desarrollado habilidades interpersonales que me permiten
					colaborar eficazmente en equipos.{" "}
				</p>
				<p>
					Actualmente, soy estudiante de Técnico Superior en
					Desarrollo de Software en el Instituto de Educación Superior
					Juan Mantovani, donde completé el primer año del cursado con
					todas las materias aprobadas. En esta etapa, reforcé mis
					bases de programación, estructuras de datos, algoritmos y
					bases de datos. Además, participé en prácticas
					profesionalizantes en las que, junto a mis compañeros de
					primer año, trabajamos en el desarrollo y venta de una
					aplicación para una organización deportiva, sin fines de
					lucro. Durante esta experiencia, apliqué
					metodologías ágiles como Scrum.{" "}
				</p>
				<p>
					He trabajado en proyectos tanto individuales como grupales,
					utilizando tecnologías como Typescript, React y Express, y
					estoy buscando oportunidades que me permitan adquirir
					experiencia profesional mientras sigo perfeccionando mis
					habilidades.
				</p>
				<p>
					¡Estoy listo para aportar mis conocimientos y contribuir a
					tu equipo para lograr grandes resultados juntos!
				</p>
			</div>
		</section>
	);
};
export default About;
