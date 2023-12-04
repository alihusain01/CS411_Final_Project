import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WeightsForm = () => {
  const [priceWeight, setPriceWeight] = useState(5); // Default to 5
  const [metacriticWeight, setMetacriticWeight] = useState(5); // Default to 5
  const [recommendationCountWeight, setRecommendationCountWeight] = useState(5); // Default to 5
  const [steamSpyPlayerWeight, setSteamSpyPlayerWeight] = useState(5); // Default to 5

  const handlePriceChange = (event) => {
    const value = parseInt(event.target.value);
    setPriceWeight(Math.min(Math.max(value, 1), 10)); // Ensure the value is between 1 and 10
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightsForm;
