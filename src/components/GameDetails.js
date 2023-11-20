import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "react-bootstrap/Image";
//larger h value for text=smaller text size

const GameDetails = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Game Details</h4>
            </div>
            <div className="card-body">
                <Image src="image_not_found.js" rounded />
                 <h6>Year Released: </h6> 
                 <h6>Console: </h6>
                 <h6>Genre: </h6>
                 <h6>Ratings: </h6>
                 <h6>Multiplayer: </h6>
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
