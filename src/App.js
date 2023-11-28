import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import GameDetails from "./components/GameDetails";
import WeightsForm from "./components/WeightsForm";
import FavoritedGames from "./components/FavoritedGamesPage";
import NavigationBar from "./components/NavigationBar";
import Signup from "./components/Signup";


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
