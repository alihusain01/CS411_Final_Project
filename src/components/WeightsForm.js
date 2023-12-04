import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//can do onChange={} inside input for the range

const submitWeights = async () => {
//   // Convert state objects to JSON strings
//   const priceWeightString = JSON.stringify(priceWeight);
//   const metacriticWeightString = JSON.stringify(metacriticWeight);
//   const recommendationCountWeightString = JSON.stringify(recommendationCountWeight);
//   const steamSpyPlayerWeightString = JSON.stringify(steamSpyPlayerWeight);

//   // Make the GET request with query parameters
//   axios
//     .get("http://localhost:3002/api/searchGames", {
//       params: {
//         genres: genresString,
//         platforms: platformsString,
//         categories: categoriesString,
//         selectValues: selectValuesString,
//         searchBarValues: searchBarValueString,
//       },
//     })
//     .then(async (response) => {
//       // setFilteredGamesTemp(response.data);
//       var temp = response.data;
//       if (userName !== " ") {
//         var scoredGames = await weightMath(temp);
//         console.log("TEST: " + scoredGames);
//         setFilteredGames(scoredGames);
//         console.log(filteredGames);
//       } else {
//         setFilteredGames(temp);
//       }
//       console.log(response);
//     })
//     .catch((error) => {
//       alert("Error: " + error.message); // Handle the error appropriately
//     });
 };


const WeightsForm = () => {
  const [priceWeight, setPriceWeight] = useState(0);
  const [metacriticWeight, setMetacriticWeight] = useState(0);
  const [recommendationCountWeight, setRecommendationCountWeight] = useState(0);
  const [steamSpyPlayerWeight, setsteamSpyPlayerWeight] = useState(0);

  const handlePriceChange = (event) => {
    setPriceWeight(parseInt(event.target.value));
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightsForm;
