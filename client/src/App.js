import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Store from "./pages/store";
// import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./App.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "353317143") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/store" element={<Store />} />
				{/* <Route path="*" element={<Notfound />} /> */}
			</Routes>
		</div>
	);
}

export default App;