import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function FavoritedGames({ games, userName, onDeleteFavoriteGame }) {
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
          {games.map((game, index) => (
            <tr key={index}>
              <td>
                <Link to={`/game/${game.gameId}`}>{game.responseName}</Link>
              </td>
              <td>
                {game.priceFinal} {game.priceCurrency}
              </td>
              <td>{game.releaseDate}</td>
              <td>{game.metacritic}</td>
              {userName !== "" && <td>{game.score.toFixed()}</td>}
              {userName !== "" && (
                <td>
                  {/* Add the button or link to delete the favorited game */}
                  <button onClick={() => onDeleteFavoriteGame(game.gameId)}>
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default FavoritedGames;
