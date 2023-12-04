import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';

function FavoritedGamesContainer({ userName, weightMath }) {
  const [favoritedGames, setFavoritedGames] = useState([]);

  useEffect(() => {
    fetchFavoritedGames(userName);
  }, [userName]);

  const fetchFavoritedGames = (userName) => {
    axios
      .get('http://localhost:3002/api/favoritedGames', { params: { userName: userName } })
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
      .delete('http://localhost:3002/api/favoritedGames', { params: { userName: userName, gameId: gameId } })
      .then((response) => {
        fetchFavoritedGames(userName);
        console.log("Favorite game deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting favorite game:", error);
      });
  };

  return (
    <Container className="mt-4">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Game Title</th>
            <th>Price</th>
            <th>Release Date</th>
            <th>Metacritic Score</th>
            {userName !== "" && <th>Your Score</th>}
            {userName !== "" && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {favoritedGames.map((game, index) => (
            <tr key={index}>
              <td>
                <Link to={`/game/${game.gameId}`}>{game.responseName}</Link>
              </td>
              <td>
                {game.priceFinal} {game.priceCurrency}
              </td>
              <td>{game.releaseDate}</td>
              <td>{game.metacritic}</td>
              <td>{game.score !== undefined ? game.score.toFixed() : ""}</td>
              <td>
                {/* Add the button or link to delete the favorited game */}
                <Button variant="danger" onClick={() => handleDeleteFavorite(game.gameId)}>Delete</Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default FavoritedGamesContainer;