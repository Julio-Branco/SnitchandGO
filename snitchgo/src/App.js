import logo from "./logo.svg";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import Profile from "./pages/Profile";
import Ranking from "./components/Ranking"

function App() {
  return (
    <div className="App">
      <Profile />
      
      <Ranking></Ranking>
    </div>
  );
}

export default App;
