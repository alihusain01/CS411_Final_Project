import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//can do onChange={} inside input for the range

const WeightsForm = () => {
  const [priceWeight,setPriceWeight]=useState(0);
  const [metacriticWeight,setMetacriticWeight]=useState(0);
  const [recommendationCountWeight,setRecommendationCountWeight]=useState(0);
  const [steamSpyPlayerWeight,setsteamSpyPlayerWeight]=useState(0);

  const handlePriceChange = (event) =>{
    setPriceWeight(parseInt(event.target.value));
  }
  const handleMetacriticChange = (event) =>{
    setMetacriticWeight(parseInt(event.target.value));
  }
  const handleRecommendationChange = (event) =>{
    setRecommendationCountWeight(parseInt(event.target.value));
  }
  const handleSpyPlayersChange = (event) =>{
    setsteamSpyPlayerWeight(parseInt(event.target.value));
  }
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Rank Profile</h4>
            </div>
            <div className="card-body">
            <label for="customRange" class="form-label">How much does the price of the game impact your choice?</label>
            <input type="range" class="form-range" step="10" id="customRange" onChange={handlePriceChange}></input>
            <p><div style = {{ whiteSpace: "pre" }}>{`${' '}0${'                                  '}1${'                                   '}2${'                                   '}3${'                                   '}4${'                                   '}5${'                                   '}6${'                                   '}7${'                                   '}8${'                                   '}9${'                                  '}10`}</div>
            </p>
            <label for="customRange" class="form-label">How much does the metacritic score of the game impact your choice?</label>
            <input type="range" class="form-range" step="10" id="customRange" onChange={handleMetacriticChange} ></input>
            <p><div style = {{ whiteSpace: "pre" }}>{`${' '}0${'                                  '}1${'                                   '}2${'                                   '}3${'                                   '}4${'                                   '}5${'                                   '}6${'                                   '}7${'                                   '}8${'                                   '}9${'                                  '}10`}</div>
            </p>
            <label for="customRange" class="form-label">How much does the number of recommendations of the game impact your choice?</label>
            <input type="range" class="form-range" step="10" id="customRange" onChange={handleRecommendationChange}></input>
            <p><div style = {{ whiteSpace: "pre" }}>{`${' '}0${'                                  '}1${'                                   '}2${'                                   '}3${'                                   '}4${'                                   '}5${'                                   '}6${'                                   '}7${'                                   '}8${'                                   '}9${'                                  '}10`}</div>
            </p>
            <label for="customRange" class="form-label">How much does the steam spy players estimate of the game impact your choice?</label>
            <input type="range" class="form-range" step="10" id="customRange" onChange={handleSpyPlayersChange}></input>
            <p><div style = {{ whiteSpace: "pre" }}>{`${' '}0${'                                  '}1${'                                   '}2${'                                   '}3${'                                   '}4${'                                   '}5${'                                   '}6${'                                   '}7${'                                   '}8${'                                   '}9${'                                  '}10`}</div>
            </p>
            <h6>0 means it doesn't impact your choice at all and 10 means it is very important to you</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightsForm;
