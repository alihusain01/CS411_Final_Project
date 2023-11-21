import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import GameDetails from './components/GameDetails';
import WeightsForm from './components/WeightsForm';
import FavoritedGames from './components/FavoritedGamesPage';

function App() {
  return (
      <div>
        <FavoritedGames/>
        <WeightsForm/>
        <GameDetails/>
        <SearchBar/>
      <Login />
      </div>
  );
}

export default App;
