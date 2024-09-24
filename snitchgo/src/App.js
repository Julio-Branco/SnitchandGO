import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Classe } from "./pages/Classe";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
=======
          <Route path="/Home" element={<Home />} />
>>>>>>> 4fc759f84a62cb9f9545fa1ef3600bc0369853de
          <Route path="/Classe" element={<Classe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
