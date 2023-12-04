import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

//can do onChange={} inside input for the range

const submitWeights = (userName, priceWeight, metacriticWeight, recommendationCountWeight, steamSpyPlayerWeight) => {
  // Convert state objects to JSON strings
  const priceWeightString = JSON.stringify(priceWeight);
  const metacriticWeightString = JSON.stringify(metacriticWeight);
  const recommendationCountWeightString = JSON.stringify(recommendationCountWeight);
  const steamSpyPlayerWeightString = JSON.stringify(steamSpyPlayerWeight);
  
  const priceFinal = "priceFinal";
  const metacritic = "metacritic";
  const recommendationCount = "recommendationCount";
  const steamSpyPlayersEstimate = "steamSpyPlayersEstimate";
  console.log(priceWeightString);
  console.log(priceFinal);
  console.log(userName.userName);
  const finalUser = userName.userName;
  axios.post('http://localhost:3002/api/NewWeightForUser', {
    userName: finalUser,
    filterName: priceFinal,
    weight: priceWeightString,
  })
  .then((response) => {
    //alert("Success: " + response.data);
  })
  .catch((error) => {
    alert("Error: " + error.message);
  });

  axios.post('http://localhost:3002/api/NewWeightForUser', {
    userName: finalUser,
    filterName: metacritic,
    weight: metacriticWeightString,
  })
  .then((response) => {
    //alert("Success: " + response.data);
  })
  .catch((error) => {
    alert("Error: " + error.message);
  });

  axios.post('http://localhost:3002/api/NewWeightForUser', {
    userName: finalUser,
    filterName: recommendationCount,
    weight: recommendationCountWeightString,
  })
  .then((response) => {
    //alert("Success: " + response.data);
  })
  .catch((error) => {
    alert("Error: " + error.message);
  });

  axios.post('http://localhost:3002/api/NewWeightForUser', {
    userName: finalUser,
    filterName: steamSpyPlayersEstimate,
    weight: steamSpyPlayerWeightString,
  })
  .then((response) => {
    //alert("Success: " + response.data);
  })
  .catch((error) => {
    alert("Error: " + error.message);
  });
  
 };

const WeightsForm = (userName) => {
  const [priceWeight, setPriceWeight] = useState(0);
  const [metacriticWeight, setMetacriticWeight] = useState(0);
  const [recommendationCountWeight, setRecommendationCountWeight] = useState(0);
  const [steamSpyPlayerWeight, setsteamSpyPlayerWeight] = useState(0);

  const handlePriceChange = (event) => {
    setPriceWeight(parseInt(event.target.value));
    console.log(priceWeight);
  };
  const handleMetacriticChange = (event) => {
    setMetacriticWeight(parseInt(event.target.value));
  };
  const handleRecommendationChange = (event) => {
    setRecommendationCountWeight(parseInt(event.target.value));
  };
  const handleSpyPlayersChange = (event) => {
    setsteamSpyPlayerWeight(parseInt(event.target.value));
  };
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Rank Profile</h4>
            </div>
            <div className="card-body">
              <label htmlFor="customRangePrice" className="form-label">
                How much does the price of the game impact your choice?
              </label>
              <input
                type="range"
                className="form-range"
                step="10"
                id="customRangePrice"
                onChange={handlePriceChange}
              />
              <span>{priceWeight}</span>
              <label htmlFor="customRangeMetacritic" className="form-label">
                How much does the metacritic score of the game impact your choice?
              </label>
              <input
                type="range"
                className="form-range"
                step="10"
                id="customRangeMetacritic"
                onChange={handleMetacriticChange}
              />
              <span>{metacriticWeight}</span>
              <label htmlFor="customRangeRecommendation" className="form-label">
                How much does the number of recommendations of the game impact your choice?
              </label>
              <input
                type="range"
                className="form-range"
                step="10"
                id="customRangeRecommendation"
                onChange={handleRecommendationChange}
              />
              <span>{recommendationCountWeight}</span>
              <label htmlFor="customRangeSteamSpy" className="form-label">
                How much does the steam spy players estimate of the game impact your choice?
              </label>
              <input
                type="range"
                className="form-range"
                step="10"
                id="customRangeSteamSpy"
                onChange={handleSpyPlayersChange}
              />
              <span>{steamSpyPlayerWeight}</span>
              <h6>
                0 means it doesn't impact your choice at all and 10 means it is very important to you
              </h6>
              <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button" onClick={()=>submitWeights(userName, priceWeight, metacriticWeight, recommendationCountWeight, steamSpyPlayerWeight)}>
                    Submit!
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightsForm;
