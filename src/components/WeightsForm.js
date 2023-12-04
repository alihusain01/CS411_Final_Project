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
  const [steamSpyPlayerWeight, setSteamSpyPlayerWeight] = useState(0);

  const handlePriceChange = (event) => {
    setPriceWeight(parseInt(event.target.value));
    console.log(priceWeight);
  };
  const handleMetacriticChange = (event) => {
    const value = parseInt(event.target.value);
    setMetacriticWeight(Math.min(Math.max(value, 1), 10));
  };
  const handleRecommendationChange = (event) => {
    const value = parseInt(event.target.value);
    setRecommendationCountWeight(Math.min(Math.max(value, 1), 10));
  };
  const handleSpyPlayersChange = (event) => {
    const value = parseInt(event.target.value);
    setSteamSpyPlayerWeight(Math.min(Math.max(value, 1), 10));
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
              <div className="mt-4">
                <h4 htmlFor="customRangePrice" className="form-label text-center">
                  How much does the price of the game impact your choice?
                </h4>
                <input
                  type="range"
                  className="form-range"
                  step="1"
                  min="1"
                  max="10"
                  id="customRangePrice"
                  onChange={handlePriceChange}
                />
                <h4 className="text-center">{priceWeight}</h4>
              </div>
              <div className="mt-4">
                <h4 htmlFor="customRangeMetacritic" className="form-label text-center">
                  How much does the metacritic score of the game impact your choice?
                </h4>
                <input
                  type="range"
                  className="form-range"
                  step="1"
                  min="1"
                  max="10"
                  id="customRangeMetacritic"
                  onChange={handleMetacriticChange}
                />
                <h4 className="text-center">{metacriticWeight}</h4>
              </div>
              <div className="mt-4">
                <h4 htmlFor="customRangeRecommendation" className="form-label text-center">
                  How much does the number of recommendations of the game impact your choice?
                </h4>
                <input
                  type="range"
                  className="form-range"
                  step="1"
                  min="1"
                  max="10"
                  id="customRangeRecommendation"
                  onChange={handleRecommendationChange}
                />
                <h4 className="text-center">{recommendationCountWeight}</h4>
              </div>
              <div className="mt-4">
                <h4 htmlFor="customRangeSteamSpy" className="form-label text-center">
                  How much does the steam spy players estimate of the game impact your choice?
                </h4>
                <input
                  type="range"
                  className="form-range"
                  step="1"
                  min="1"
                  max="10"
                  id="customRangeSteamSpy"
                  onChange={handleSpyPlayersChange}
                />
                <h4 className="text-center">{steamSpyPlayerWeight}</h4>
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={() => submitWeights(userName, priceWeight, metacriticWeight, recommendationCountWeight, steamSpyPlayerWeight)}>
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
