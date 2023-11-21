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
                 <p><h5>Console: </h5></p>
                 <p><h5>Genre: </h5></p>
                 <p><h5>Ratings: </h5></p>
                 <p><h5>Multiplayer: </h5></p>
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
