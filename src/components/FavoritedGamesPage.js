import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//larger h value for text=smaller text size

//call API to get array of favorited games. Then do 1. GameName and image?

const FavoritedGames = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Favorited Games</h4>
            </div>
            <div className="card-body">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritedGames;
