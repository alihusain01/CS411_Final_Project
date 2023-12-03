import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const GameDetails = ({ games }) => {
  let { id } = useParams();
  id = Number(id);

  let index = games.findIndex((game) => {
    return Number(game.gameId) === id;
  });

  console.log("index: " + index);
  const [game, setGame] = useState(games[index]);

  // Column 1
  const [releaseDate, setReleaseDate] = useState("");
  const [priceFinal, setPriceFinal] = useState(0.0);
  const [genreName, setGenreName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [platformName, setPlatformName] = useState("");
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

    console.log(game);

    setReleaseDate(game.releaseDate);
    setPriceFinal(game.priceFinal);
    setGenreName(game.genreName);
    setCategoryName(game.categoryName);
    setPlatformName(game.platformName);
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
  }, [game]);

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>{game.responseName}</h4>
            </div>
            <div className="card-body">
              <Row>
                <Col>
                  {/* Column 1 */}
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Release Date: </span>
                    <span>{releaseDate}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Price Final: </span>
                    <span>{priceFinal}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Genres: </span>
                    <span>{genreName}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Categories: </span>
                    <span>{categoryName}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Platforms: </span>
                    <span>{platformName}</span>
                  </div>
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>Description: </span>
                    <span>{detailedDescription}</span>
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
                </Col>
                <Col>
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
                      Currency of Price:{" "}
                    </span>
                    <span>{priceCurrency}</span>
                  </div>
                </Col>
                <Col>
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
                  <div className="mb-3">
                    <span style={{ fontWeight: "bold" }}>
                      Short Description:{" "}
                    </span>
                    <span>{shortDescrip}</span>
                  </div>
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
                    <span style={{ fontWeight: "bold" }}>Header Image: </span>
                    <span>{headerImage}</span>
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
