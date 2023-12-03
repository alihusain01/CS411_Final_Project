import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import Signup from "./components/Signup";
import axios from "axios";
import ListView from "./components/ListView";
import games from "./backend/testData.js";
import GameDetails from "./components/GameDetails";

function App() {
  useEffect(() =>{
    searchGames();
  },[]);
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

  const [currWeights,setCurrWeights] = useState([]);
  const [currNormalWeights,setCurrNormalWeights] = useState([]);
  // const [userName, setUserName]=useState("");
  const weightMath = () =>{
    // const userNameString='';
    // setUserName(userNameString);
    const userNameString = JSON.stringify(userName);

    axios
    .get("http://localhost:3002/api/WeightsForUser", {
      params: {
        userName: userNameString,
      },
    })
    .then((response) => {
      setCurrWeights(response.data);
      console.log(response);
      const sum = currWeights[0].weight + currWeights[1].weight +currWeights[2].weight + currWeights[3].weight;
      console.log(sum);
      setCurrNormalWeights([currWeights[0].weight/sum,currWeights[1].weight/sum, currWeights[2].weight/sum, currWeights[3].weight/sum])
      console.log(currNormalWeights);
      let tempFilteredGames=filteredGamesTemp;
      for( let i = 0; i < filteredGamesTemp.length; i++) {
        const score = ((((449.99-filteredGamesTemp[i].priceFinal)/449.99) * currNormalWeights[1])+ (((filteredGamesTemp[i].metacritic)/100) * currNormalWeights[0])+ (((filteredGamesTemp[i].metacritic)/1427633) * currNormalWeights[2])+(((filteredGamesTemp[i].steamSpyPlayersEstimate)/90687580) * currNormalWeights[3]))*100;
        // console.log(score);
        // score=score*100;
        tempFilteredGames[i].score=score;
      }
      tempFilteredGames.sort((a,b) => b.score-a.score);
      setFilteredGames(tempFilteredGames);
    })
    .catch((error) => {
      alert("Error: " + error.message); // Handle the error appropriately
    });
    

  }

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
        setFilteredGamesTemp(response.data);
        if(userName!="") {weightMath();}
        else{
          setFilteredGames(filteredGamesTemp);
        }
        console.log(response);
      })
      .catch((error) => {
        alert("Error: " + error.message); // Handle the error appropriately
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
                <ListView games={filteredGames} userName={userName}/>
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
            element={<GameDetails games={filteredGames} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
