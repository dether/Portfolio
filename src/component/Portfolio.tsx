import React from "react";
import pi from "../assets/PI LADING.png";
import pf from "../assets/Facil Market.png";
import "../styles/portfolio.css";

const Portfolio: React.FC = () => {
	return (
		<section className="portfolio" id="portfolio">
			<h2 className="heading">
				Mis <span>proyectos</span>
			</h2>

			<div className="portfolio-container">
				<div className="portfolio-box">
					<img src={pi} alt="" />
					<div className="portfolio-layer">
						<h4>App Videogames</h4>
						<p>
							La aplicación ofrece a los usuarios una experiencia fluida y fácil
							de usar para encontrar juegos de su interés en una lista que
							contiene hasta 100 títulos. Implementé funcionalidades clave, como
							búsquedas por nombre, filtrados combinados y ordenamientos, que
							permiten a los usuarios encontrar rápidamente los juegos que
							desean explorar. Click en el botón para ver el repositorio.
						</p>
						<div className="buttons">
							<div className="button">
								<a
									href="https://github.com/dether/PI-Videogames-main"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="bx bxs-folder-open"></i>
								</a>
							</div>
							<div className="button">
								<a
									href="https://www.youtube.com/watch?v=F8AWVPozBX8"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="bx bx-movie-play"></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="portfolio-box">
					<img src={pf} alt="" />
					<div className="portfolio-layer">
						<h4>App Facil Market</h4>
						<p>
							Fácil Market es una aplicación diseñada para brindar a los
							usuarios una experiencia fluida y fácil de usar en el proceso de
							compra y venta de productos. Con esta app, los usuarios pueden
							buscar y publicar productos de manera conveniente.Incluye
							autenticación de usuarios, búsquedas avanzadas, filtros
							combinados, ordenamientos y bloqueo de usuarios... Click en el
							botón para ver el repositorio.
						</p>
						<div className="buttons">
							<div className="button">
							<a
								href="https://github.com/dether/facil-market-proyect"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="bx bxs-folder-open"></i>
							</a>
							</div>
							<div className="button">
							<a
								href="https://www.youtube.com/watch?v=XQNHgjvIK84&t=22s"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="bx bx-movie-play"></i>
							</a>
							</div>
						</div>
					</div>
				</div>

				{/* <div className="portfolio-box">
					<img src={pi} alt="" />
					<div className="portfolio-layer">
						<h4>otra app</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
							rem culpa unde vel temporibus blanditiis totam dignissimos
							laudantium, doloremque eius.
						</p>
						<a href="#">
							<i className="bx bx-link-external"></i>
						</a>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Portfolio;
