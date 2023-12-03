import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import Signup from "./components/Signup";
import axios from 'axios';

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

  const [userName, setuserNameValue] = useState("");
  

  console.log(searchBarValue)

  const searchGames = () => {
    // Convert state objects to JSON strings
    const genresString = JSON.stringify(genres);
    const platformsString = JSON.stringify(platforms);
    const categoriesString = JSON.stringify(categories);

  
    // Make the GET request with query parameters
    axios
      .get('http://localhost:3002/api/searchGames', {
        params: {
          genres: genresString,
          platforms: platformsString,
          categories: categoriesString,
        },
      })
      .then((response) => {
        alert('Success: ' + JSON.stringify(response.data)); // Update this based on your server response
      })
      .catch((error) => {
        alert('Error: ' + error.message); // Handle the error appropriately
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

  const handleuserNameChange = (value) => {
    setuserNameValue(value);
  };

  const handleSearchBarChange = (event) => {
    setSearchBarValue(event.target.value);
  }

  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/login" element={<Login onLoginSuccess={handleuserNameChange}/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
