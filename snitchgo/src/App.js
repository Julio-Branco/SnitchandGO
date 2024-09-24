import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {Classe} from './pages/Classe'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Classe" element={<Classe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
