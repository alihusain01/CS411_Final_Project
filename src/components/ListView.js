import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function ListView({ games, userName }) {
  const userName2="ldaskfj;s";
  return (
    <Container className="mt-4">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Game Title</th>
            <th>Price</th>
            <th>Release Date</th>
            <th>Metacritic Score</th>
            {userName!="" &&(<th>Your Score</th>)}
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
              {userName!="" && <td>{game.score.toFixed()}</td>}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListView;
