import React from "react";
import pi from "../assets/PI LADING.webp";
import pf from "../assets/Facil Market.webp";
import dv from "../assets/DV.webp";
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
							contiene hasta 100 títulos.
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
									<i className="bx bxl-youtube"></i>
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
							compra y venta de productos.
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
									<i className="bx bxl-youtube"></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="portfolio-box">
					<img src={dv} alt="" />
					<div className="portfolio-layer">
						<h4>Departamentos Vargas</h4>
						<p>
							Departamentos Vargas es una aplicación diseñada exclusivamente
							para consultar la disponibilidad de nuestros departamentos,
							tambien brinda información de los departamentos que ofrecemos y
							nuestros contactos.
						</p>
						<div className="buttons">
							<div className="button">
								<a
									href="https://github.com/dether/Apartment-Rental"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="bx bxs-folder-open"></i>
								</a>
							</div>
							<div className="button">
								<a
									href="https://apartment-rental-navy.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="bx bx-link-external"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
