// import React from "react";
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
//larger h value for text=smaller text size

const GameDetails = () => {
  const [releaseDate, setreleaseDate] = useState('');
  const [requiredAge, setrequiredAge] = useState(0);
  const [demoCount, setdemoCount] = useState(0);
  const [developerCount, setdeveloperCount] = useState(0);
  const [dlcCount, setdlcCount] = useState(0);
  const [metacritic, setmetacritic] = useState(0);
  const [movieCount, setmovieCount] = useState(0);
  const [packageCount, setpackageCount] = useState(0);
  const [recommendationCount, setrecommendationCount] = useState(0);
  const [publisherCount, setpublisherCount] = useState(0);
  const [screenshotCount, setscreenshotCount] = useState(0);
  const [steamSpyOwners, setsteamSpyOwners] = useState(0);
  const [steamSpyOwnersVariance, setsteamSpyOwnersVariance] = useState(0);
  const [steamSpyPlayersEstimate, setsteamSpyPlayersEstimate] = useState(0);
  const [steamSpyPlayersVariance, setsteamSpyPlayersVariance] = useState(0);
  const [achievementCount, setachievementCount] = useState(0);
  const [achievementHighlightedCount, setachievementHighlightedCount] = useState(0);
  const [priceCurrency, setpriceCurrency] = useState('');
  const [priceFinal, setpriceFinal] = useState(0.0);
  const [shortDescrip, setshortDescrip] = useState('');
  const [detailedDescrip, setdetailedDescrip] = useState('');
  const [drmNotice, setdrmNotice] = useState('');
  const [extUserAcctNotice, setextUserAcctNotice] = useState('');
  const [headerImage, setheaderImage] = useState('');
  const [legalNotice, setlegalNotice] = useState('');
  const [reviews, setreviews] = useState('');
  const [genreName, setgenreName] = useState('');
  const [categoryName, setcategoryName] = useState('');
  const [platformName, setplatformName] = useState('');

  const addToFavorites = (gameId) => {
    axios
      .post('http://localhost:3002/api/favoritedGames', { userName, gameId })
      .then((response) => {
        alert('Success: ' + response.data);
      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Game Details</h4>
            </div>
            <div className="card-body">
              <Row>
                <Col xs={3}>
                <Image src="https://demofree.sirv.com/nope-not-here.jpg" rounded />
                </Col>
                <Col>
                
                 <p><h5>Release Data: {releaseDate}</h5> </p>
                 <p><h5>Required Age: {requiredAge}</h5> </p>
                 <p><h5>Demo Count: {demoCount}</h5> </p>
                 <p><h5>Developer Count: {developerCount} </h5> </p>
                 <p><h5>DLC Count: {dlcCount}</h5> </p>
                 <p><h5>Metacritic score: {metacritic}</h5> </p>
                 <p><h5>Movie Count: {movieCount}</h5> </p>
                 <p><h5>Package Count: {packageCount}</h5> </p>
                 <p><h5>Recommendation Count: {recommendationCount}</h5> </p>
                 <p><h5>Publisher Count: {publisherCount}</h5> </p>
                 <p><h5>Screenshot Count: {screenshotCount}</h5> </p>
                 <p><h5>Steam Spy Owners: {steamSpyOwners}</h5> </p>
                 <p><h5>Steam Spy Owners Variance: {steamSpyOwnersVariance}</h5> </p>
                 <p><h5>Steam Spy Players Estimate: {steamSpyPlayersEstimate}</h5> </p>
                 <p><h5>Steam Spy Players Variance: {steamSpyPlayersVariance}</h5> </p>
                 <p><h5>Achievement Count: {achievementCount}</h5> </p>
                 <p><h5>Achievement Highlighted Count: {achievementHighlightedCount}</h5> </p>
                 <p><h5>Currency of Price: {priceCurrency}</h5> </p>
                 <p><h5>Final Price: {priceFinal}</h5> </p>
                 <p><h5>Short Description: {shortDescrip}</h5> </p>
                 <p><h5>Detailed Description {detailedDescrip}</h5> </p>
                 <p><h5>DRM notice: {drmNotice}</h5> </p>
                 <p><h5>Extended User Account Notice: {extUserAcctNotice}</h5> </p>
                 <p><h5>Header Image: {headerImage}</h5> </p>
                 <p><h5>Legal Notice: {legalNotice}</h5> </p>
                 <p><h5>Reviews: {reviews}</h5> </p>
                 <p><h5>Genre: {genreName}</h5></p>
                 <p><h5>Category: {categoryName}</h5></p>
                 <p><h5>Platform: {platformName}</h5></p>
                 </Col>
                 </Row>
              <form className="mt-4">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
