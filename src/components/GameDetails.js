import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
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
              <Row>
                <Col xs={3}>
                <Image src="https://demofree.sirv.com/nope-not-here.jpg" rounded />
                </Col>
                <Col>
                
                 <p><h5>Year Released:</h5> </p>
                 <p><h5>Required Age:</h5> </p>
                 <p><h5>Demo Count:</h5> </p>
                 <p><h5>Developer Count:</h5> </p>
                 <p><h5>DLC Count:</h5> </p>
                 <p><h5>Metacritic score:</h5> </p>
                 <p><h5>Movie Count:</h5> </p>
                 <p><h5>Package Count:</h5> </p>
                 <p><h5>Recommendation Count:</h5> </p>
                 <p><h5>Publisher Count:</h5> </p>
                 <p><h5>Screenshot Count:</h5> </p>
                 <p><h5>Steam Spy Owners:</h5> </p>
                 <p><h5>Steam Spy Owners Variance:</h5> </p>
                 <p><h5>Steam Spy Players Estimate:</h5> </p>
                 <p><h5>Steam Spy Players Variance:</h5> </p>
                 <p><h5>Achievement Count:</h5> </p>
                 <p><h5>Achievement Highlighted Count:</h5> </p>
                 <p><h5>Currency of Price:</h5> </p>
                 <p><h5>Final Price:</h5> </p>
                 <p><h5>Short Description</h5> </p>
                 <p><h5>Detailed Description</h5> </p>
                 <p><h5>DRM notice:</h5> </p>
                 <p><h5>Extended User Account Notice:</h5> </p>
                 <p><h5>Header Image:</h5> </p>
                 <p><h5>Legal Notice:</h5> </p>
                 <p><h5>Reviews:</h5> </p>
                 <p><h5>Genre: </h5></p>
                 <p><h5>Category: </h5></p>
                 <p><h5>Platform: </h5></p>
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
