import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Footer from "./component/Footer";
/* import Services from "./component/Services"; */
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Script from "./script";
import Skills from "./component/Skills";


const App: React.FC = () => {


	return (
		<>
			<Navbar />

			<Home />
			<About />
			{/*     <Services /> */}
			<Skills />
			<Portfolio />
			<Contact />

			<Footer />
			<Script />
		</>
	);
};

export default App;
