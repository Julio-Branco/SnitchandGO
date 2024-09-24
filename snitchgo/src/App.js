import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Classe } from "./pages/Classe";
import Profile from "./pages/Profile";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Home" element={<Home />} />
					<Route path="/Classe" element={<Classe />} />
					<Route path="/Profile" element={<Profile id="0" />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
