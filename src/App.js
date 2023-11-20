import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import GameDetails from './components/GameDetails';

function App() {
  return (
      <div>
        <GameDetails/>
        <SearchBar/>
      <Login />
      </div>
  );
}

export default App;
