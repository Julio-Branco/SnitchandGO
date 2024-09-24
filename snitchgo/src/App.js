import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Classe } from "./pages/Classe";
import Profile from "./pages/Profile";
import { Leaderboardrank } from "./pages/Leaderboardrank";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Classe" element={<Classe />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Leaderboardrank" element={<Leaderboardrank />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
