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

const App: React.FC = () => {
	return (
		<>
			<Navbar />

			<Home />
			<About />
			{/*     <Services /> */}
			<Portfolio />
			<Contact />

			<Footer />
			<Script />
		</>
	);
};

export default App;
