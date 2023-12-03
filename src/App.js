import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import Signup from "./components/Signup";
import axios from "axios";
import ListView from "./components/ListView";
import games from "./backend/testData.js";
import GameDetails from "./components/GameDetails";
import { useDispatch } from "react-redux";
import { logout } from "./user_auth/actions";

function App() {
  useEffect(() => {
    console.log("username: " + userName)
    // searchGames();
  }, []);

  const [genres, setGenres] = useState({
    nonGame: false,
    indie: false,
    action: false,
    adventure: false,
    casual: false,
    strategy: false,
    rpg: false,
    simulation: false,
    earlyAccess: false,
    freeToPlay: false,
    sports: false,
    racing: false,
    massivelyMultiplayer: false,
  });

  const [platforms, setPlatforms] = useState({
    Mac: false,
    Linux: false,
    Windows: false,
  });

  const [categories, setCategories] = useState({
    singlePlayer: false,
    multiplayer: false,
    coop: false,
    mmo: false,
    inAppPurchases: false,
    includesSourceSdk: false,
    includesLevelEditor: false,
    vrSupport: false,
  });

  const [selectValues, setSelectValues] = useState({
    maximumPrice: "",
    yearReleased: "",
    minimumAge: "",
  });

  const [searchBarValue, setSearchBarValue] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [filteredGamesTemp, setFilteredGamesTemp] = useState([]);

  // const [currWeights, setCurrWeights] = useState([]);
  // const [currNormalWeights, setCurrNormalWeights] = useState([]);

  const [userName, setUserName] = useState("");

  var user = useSelector((state) => state.user);

  useEffect(() => {
    setUserName(user.userName);
    // ...
  }, [user]);

  const weightMath = async (filteredGamesTemp) => {
    const userNameString = userName;
    let currWeights = [];
  
    try {
      const response = await axios.get("http://localhost:3002/api/WeightsForUser", {
        params: {
          userName: userNameString,
        },
      });
      currWeights = response.data;
    } catch (error) {
      alert("Error: " + error.message);
      return []; // Return an empty array or handle the error as needed
    }
  
    const sum =
      currWeights[0].weight +
      currWeights[1].weight +
      currWeights[2].weight +
      currWeights[3].weight;
    
    console.log(sum);
  
    const currNormalWeights = [
      currWeights[0].weight / sum,
      currWeights[1].weight / sum,
      currWeights[2].weight / sum,
      currWeights[3].weight / sum,
    ];
  
    const scored_games = filteredGamesTemp.map((game) => {
      const score =
        (((449.99 - game.priceFinal) / 449.99) * currNormalWeights[1] +
          (game.metacritic / 100) * currNormalWeights[0] +
          (game.recommendationCount / 1427633) * currNormalWeights[2] +
          (game.steamSpyPlayersEstimate / 90687580) * currNormalWeights[3]) *
        100;
      
      return {
        ...game,
        score: score,
      };
    });
  
    scored_games.sort((a, b) => b.score - a.score);
  
    return scored_games;
  };
  

  /* Login Information */

  const dispatch = useDispatch();

  const searchGames = async () => {
    // Convert state objects to JSON strings
    const genresString = JSON.stringify(genres);
    const platformsString = JSON.stringify(platforms);
    const categoriesString = JSON.stringify(categories);
    const selectValuesString = JSON.stringify(selectValues);
    const searchBarValueString = JSON.stringify(searchBarValue);

    // Make the GET request with query parameters
    axios
      .get("http://localhost:3002/api/searchGames", {
        params: {
          genres: genresString,
          platforms: platformsString,
          categories: categoriesString,
          selectValues: selectValuesString,
          searchBarValues: searchBarValueString,
        },
      })
      .then(async (response) => {
        // setFilteredGamesTemp(response.data);
        var temp = response.data;
        if (userName !== " ") {
          var scoredGames = await weightMath(temp);
          console.log("TEST: " + scoredGames);
          setFilteredGames(scoredGames);
          console.log(filteredGames);
        } else {
          setFilteredGames(temp);
        }
        console.log(response);
      })
      .catch((error) => {
        alert("Error: " + error.message); // Handle the error appropriately
      });
  };

  const addToFavorites = (gameId) => {
    axios
      .post("http://localhost:3002/api/favoritedGames", { userName, gameId })
      .then((response) => {
        alert("Success: " + response.data);
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  const handleGenreChange = (genre) => {
    setGenres((prevGenres) => ({
      ...prevGenres,
      [genre]: !prevGenres[genre],
    }));
  };

  const handlePlatformChange = (platform) => {
    setPlatforms((prevPlatforms) => ({
      ...prevPlatforms,
      [platform]: !prevPlatforms[platform],
    }));
  };

  const handleCategoryChange = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const handleSelectChange = (name, value) => {
    setSelectValues((prevSelectValues) => ({
      ...prevSelectValues,
      [name]: value,
    }));
  };

  const handleSearchBarChange = (event) => {
    setSearchBarValue(event.target.value);
  };

  const handleLogout = () => {
    dispatch(logout());
    setFilteredGames([]);
    setUserName(null);
  };

  return (
    <Router>
      <div>
        <NavigationBar onLogout={handleLogout} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar
                  genres={genres}
                  platforms={platforms}
                  categories={categories}
                  selectValues={selectValues}
                  handleGenreChange={handleGenreChange}
                  handlePlatformChange={handlePlatformChange}
                  handleCategoryChange={handleCategoryChange}
                  handleSelectChange={handleSelectChange}
                  handleSearchBarChange={handleSearchBarChange}
                  searchGames={searchGames}
                />
                <ListView games={filteredGames} userName={userName} />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/game/:id"
            element={
              <GameDetails
                games={filteredGames}
                addToFavorites={addToFavorites}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
