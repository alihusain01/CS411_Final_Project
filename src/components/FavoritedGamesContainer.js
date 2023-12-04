import React, { useState, useEffect } from "react";
import FavoritedGames from "./FavoritedGamesPage";
import axios from "axios";

function FavoritedGamesContainer({ userName }) {
  const [favoritedGames, setFavoritedGames] = useState([]);

  useEffect(() => {
    if (userName !== "") {
      // Call the API to get favorited games for the specific user
      fetchFavoritedGames(userName);
    }
  }, [userName]);

  const fetchFavoritedGames = (userName) => {
    axios
      .get(`http://localhost:3002/api/favoritedGames/${userName}`)
      .then((response) => {
        setFavoritedGames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching favorited games:", error);
      });
  };

  const handleDeleteFavorite = (gameId) => {
    // Make a DELETE request to your API endpoint
    axios
      .delete(`http://localhost:3002/api/favoritedGames/${userName}/${gameId}`)
      .then((response) => {
        // If the deletion is successful, update the list of favorited games
        fetchFavoritedGames(userName);
        console.log("Favorite game deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting favorite game:", error);
      });
  };

  return (
    <FavoritedGames
      games={favoritedGames}
      userName={userName}
      onDeleteFavoriteGame={handleDeleteFavorite}
    />
  );
}

export default FavoritedGamesContainer;
