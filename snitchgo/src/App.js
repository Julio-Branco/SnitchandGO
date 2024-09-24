import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import Profile from "./pages/Profile";
import Ranking from "./components/Ranking"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Ranking />
    </div>
  );
}

export default App;
