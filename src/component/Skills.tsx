import { Icon } from "@iconify/react";
import "../styles/skills.css";

const Skills = () => {
	return (
		<section className="skills" id="skills">
			<h2 className="heading">
				Mis <span>habilidades</span>
			</h2>

			<div className="skill-container">
				
				<div className="skill">
				<a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
					<Icon icon="skill-icons:javascript" className="icon-large" />
					<p className="skill-name">Javascript</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://www.typescriptlang.org/docs/handbook/2/basic-types.html" target="_blank" rel="noopener noreferrer">
					<Icon icon="skill-icons:typescript" className="icon-large"/>
					<p className="skill-name">Typescript</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://es.react.dev/learn" target="_blank" rel="noopener noreferrer">
					<Icon icon="skill-icons:react-light" className="icon-large"/>
					<p className="skill-name">React</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://nodejs.org/es/docs" target="_blank" rel="noopener noreferrer">
					<Icon icon="akar-icons:node-fill" className="icon-large" style={{ color: 'var(--main-color)' }}/>
					<p className="skill-name">Node</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://es.redux.js.org/" target="_blank" rel="noopener noreferrer">
					<Icon icon="skill-icons:redux" className="icon-large"/>
					<p className="skill-name">Redux</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
					<Icon icon="logos:css-3" className="icon-large"/>
					<p className="skill-name">CSS</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://sass-lang.com/documentation/" target="_blank" rel="noopener noreferrer">
					<Icon icon="skill-icons:sass" className="icon-large"/>
					<p className="skill-name">Sass</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
					<Icon icon="devicon:postgresql-wordmark" className="icon-large"/>
					<p className="skill-name">PostgreSQL</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://expressjs.com/es/" target="_blank" rel="noopener noreferrer">
					<Icon icon="devicon:express-wordmark" className="icon-large" />
					<p className="skill-name">Express</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://sequelize.org/" target="_blank" rel="noopener noreferrer">
					<Icon icon="skill-icons:sequelize-light" className="icon-large"/>
					<p className="skill-name">Sequelize</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://git-scm.com/docs/git" target="_blank" rel="noopener noreferrer">
					<Icon icon="skill-icons:git" className="icon-large"/>
					<p className="skill-name">Git</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://www.manualweb.net/html/documento-html/" target="_blank" rel="noopener noreferrer">
					<Icon icon="logos:html-5" className="icon-large"/>
					<p className="skill-name">HTML</p>
					</a>
				</div>

				<div className="skill">
				<a href="https://docs.insomnia.rest/" target="_blank" rel="noopener noreferrer">
					<Icon icon="logos:insomnia" className="icon-large"/>
					<p className="skill-name">Insomnia</p>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Skills;
