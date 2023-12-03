import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import Signup from "./components/Signup";
import axios from "axios";
import ListView from "./components/ListView";
import games from "./backend/testData.js";
import GameDetails from "./components/GameDetails";

function App() {
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

  /* Login Information */
  const [userName, setuserNameValue] = useState("");


  const searchGames = () => {
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
      .then((response) => {
        setFilteredGames(response.data);
        console.log(response);
      })
      .catch((error) => {
        alert("Error: " + error.message); // Handle the error appropriately
      });
  };

  const addToFavorites = (gameId) => {
    axios
      .post('http://localhost:3002/api/favoritedGames', {userName, gameId })
      .then((response) => {
        alert('Success: ' + response.data);
      })
      .catch((error) => {
        alert('Error: ' + error.message);
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

  const onLoginSuccess = (userName) => {
    setuserNameValue(userName);
  }

  return (
    <Router>
      <div>
        <NavigationBar />
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
                <ListView games={filteredGames} />
              </>
            }
          />
          <Route
            path="/login"
            element={<Login onLoginSuccess={onLoginSuccess} />}
          />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/game/:id"
            element={<GameDetails games={filteredGames} addToFavorites={addToFavorites}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
