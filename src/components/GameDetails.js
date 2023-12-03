import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

// Helper function to generate a random background color
const getRandomColor = () => {
  const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const matchColorText = (color) => {
  switch (color) {
    case "primary":
      return "light";
    case "secondary":
      return "light";
    case "success":
      return "light";
    case "danger":
      return "light";
    case "warning":
      return "dark";
    case "info":
      return "light";
    case "light":
      return "dark";
    case "dark":
      return "light";
    default:
      return "dark";
  }
}

const GameDetails = ({ games }) => {
  let { id } = useParams();
  id = Number(id);

  let index = games.findIndex((game) => {
    return Number(game.gameId) === id;
  });

  const [game, setGame] = useState(games[index]);

  // Column 1
  const [releaseDate, setReleaseDate] = useState("");
  const [priceFinal, setPriceFinal] = useState(0.0);
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [detailedDescription, setDetailedDescription] = useState("");
  const [requiredAge, setRequiredAge] = useState(0);
  const [demoCount, setDemoCount] = useState(0);
  const [dlcCount, setDlcCount] = useState(0);
  const [metacritic, setMetacritic] = useState(0);

  // Column 2
  const [publisherCount, setPublisherCount] = useState(0);
  const [screenshotCount, setScreenshotCount] = useState(0);
  const [steamSpyOwners, setSteamSpyOwners] = useState(0);
  const [steamSpyOwnersVariance, setSteamSpyOwnersVariance] = useState(0);
  const [steamSpyPlayersEstimate, setSteamSpyPlayersEstimate] = useState(0);
  const [steamSpyPlayersVariance, setSteamSpyPlayersVariance] = useState(0);
  const [achievementCount, setAchievementCount] = useState(0);
  const [achievementHighlightedCount, setAchievementHighlightedCount] =
    useState(0);
  const [priceCurrency, setPriceCurrency] = useState("");

  // Column 3
  const [developerCount, setDeveloperCount] = useState(0);
  const [packageCount, setPackageCount] = useState(0);
  const [shortDescrip, setShortDescrip] = useState("");
  const [drmNotice, setDrmNotice] = useState("");
  const [extUserAcctNotice, setExtUserAcctNotice] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [legalNotice, setLegalNotice] = useState("");
  const [reviews, setReviews] = useState("");
  const [movieCount, setMovieCount] = useState(0);
  const [recommendationCount, setRecommendationCount] = useState(0);

  useEffect(() => {
    // Set state variables based on the game data when it changes

    // console.log(game);
    setReleaseDate(game.releaseDate);
    setPriceFinal(game.priceFinal);
    setDetailedDescription(game.detailedDescrip);
    setRequiredAge(game.requiredAge);
    setDemoCount(game.demoCount);
    setDlcCount(game.dlcCount);
    setMetacritic(game.metacritic);

    setPublisherCount(game.publisherCount);
    setScreenshotCount(game.screenshotCount);
    setSteamSpyOwners(game.steamSpyOwners);
    setSteamSpyOwnersVariance(game.steamSpyOwnersVariance);
    setSteamSpyPlayersEstimate(game.steamSpyPlayersEstimate);
    setSteamSpyPlayersVariance(game.steamSpyPlayersVariance);
    setAchievementCount(game.achievementCount);
    setAchievementHighlightedCount(game.achievementHighlightedCount);
    setPriceCurrency(game.priceCurrency);

    setDeveloperCount(game.developerCount);
    setPackageCount(game.packageCount);
    setShortDescrip(game.shortDescrip);
    setDrmNotice(game.drmNotice);
    setExtUserAcctNotice(game.extUserAcctNotice);
    setHeaderImage(game.headerImage);
    setLegalNotice(game.legalNotice);
    setReviews(game.reviews);
    setMovieCount(game.movieCount);
    setRecommendationCount(game.recommendationCount);

    axios
      .get("http://localhost:3002/api/genreTable", {
        params: {
          genreId: game.genreId,
        },
      })
      .then((response) => {
        const genreData = response.data[0].genreName.split(";");
        genreData.pop(); // Remove the last element

        setGenres(genreData);
        console.log(genres.length);
      })
      .catch((error) => {
        alert("Error: " + error.message); // Handle the error appropriately
      });

    axios
      .get("http://localhost:3002/api/categoryTable", {
        params: {
          categoryId: game.categoryId,
        },
      })
      .then((response) => {
        const categoryData = response.data[0].categoryName.split(";");
        categoryData.pop(); // Remove the last element

        setCategories(categoryData);
        console.log(categories.length);
      })
      .catch((error) => {
        alert("Error: " + error.message); // Handle the error appropriately
      });

    axios
      .get("http://localhost:3002/api/platformTable", {
        params: {
          platformId: game.platformId,
        },
      })
      .then((response) => {
        const platformData = response.data[0].platformName.split(";");

        setPlatforms(platformData);
        console.log(platforms.length);
      })
      .catch((error) => {
        alert("Error: " + error.message); // Handle the error appropriately
      });
  }, [game]);

  const headerStyle = {
    backgroundImage: `url(${game.headerImage})`,
    minHeight: "350px", // Adjust the minimum height as needed
    backgroundSize: "cover", // You can adjust the background size as needed
    backgroundPosition: "center", // You can adjust the background position as needed
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            {/* <div className="card-header">
              <h4>{game.responseName}</h4>
            </div> */}
            <div className="header-banner" style={headerStyle}></div>
            <div className="card-body">
              <Row>
                <div className="mb-3">
                  <div className="mb-3 text-center">
                    <h1>{game.responseName}</h1>
                    <span>{detailedDescription}</span>
                  </div>
                </div>
              </Row>
              <Row>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <span style={{ fontWeight: "bold" }}>Genre: </span>
                      {genres.map((genre, index) => {
                        let color = getRandomColor();
                        return (
                          <Badge
                            key={index}
                            pill
                            bg={color}
                            text={matchColorText(color)}
                            className="me-2 mb-2"
                          >
                            {genre}
                          </Badge>
                        );
                      })}
                    </div>

                    <div>
                      <span style={{ fontWeight: "bold" }}>Platform: </span>
                      {platforms.map((platform, index) => {
                        return (
                          <Badge
                            key={index}
                            pill
                            bg={'info'}
                            text={'light'}
                            className="me-2 mb-2"
                          >
                            {platform}
                          </Badge>
                        );
                      })}
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>Categories: </span>
                      {categories.map((category, index) => {
                        let color = getRandomColor();
                        return (
                          <Badge
                            key={index}
                            pill
                            bg={'dark'}
                            text={'light'}
                            className="me-2 mb-2"
                          >
                            {category}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Row>

              <Row>
                <div className="mb-3 text-center">
                  <h3>Additional Info</h3>
                </div>
              </Row>
              <Row>
                <Col>
                  {/* Column 1 */}
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Release Date: </span>
                    <span>{releaseDate}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Price Final: </span>
                    <span>
                      {priceFinal} {priceCurrency}
                    </span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Required Age: </span>
                    <span>{requiredAge}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Demo Count: </span>
                    <span>{demoCount}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>DLC Count: </span>
                    <span>{dlcCount}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Metacritic Score:{" "}
                    </span>
                    <span>{metacritic}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Publisher Count:{" "}
                    </span>
                    <span>{publisherCount}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Screenshot Count:{" "}
                    </span>
                    <span>{screenshotCount}</span>
                  </div>
                </Col>
                <Col>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Steam Spy Owners:{" "}
                    </span>
                    <span>{steamSpyOwners}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Steam Spy Owners Variance:{" "}
                    </span>
                    <span>{steamSpyOwnersVariance}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Steam Spy Players Estimate:{" "}
                    </span>
                    <span>{steamSpyPlayersEstimate}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Steam Spy Players Variance:{" "}
                    </span>
                    <span>{steamSpyPlayersVariance}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Achievement Count:{" "}
                    </span>
                    <span>{achievementCount}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Achievement Highlighted Count:{" "}
                    </span>
                    <span>{achievementHighlightedCount}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Developer Count:{" "}
                    </span>
                    <span>{developerCount}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Package Count: </span>
                    <span>{packageCount}</span>
                  </div>
                </Col>
                <Col>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>DRM Notice: </span>
                    <span>{drmNotice}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Extended User Account Notice:{" "}
                    </span>
                    <span>{extUserAcctNotice}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Legal Notice: </span>
                    <span>{legalNotice}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Reviews: </span>
                    <span>{reviews}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Movie Count: </span>
                    <span>{movieCount}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Recommendation Count:{" "}
                    </span>
                    <span>{recommendationCount}</span>
                  </div>
                </Col>
              </Row>
              {/* Additional columns can be added here */}
              <form className="mt-4"></form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
