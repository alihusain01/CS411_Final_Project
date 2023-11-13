import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const GenreFilter = () => {
  return (
    <div className="form-group">
      <div className="d-flex flex-wrap">
        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Non Game"
          />
          <label className="form-check-label" htmlFor="Non Game">
            Non Game
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Indie"
          />
          <label className="form-check-label" htmlFor="Indie">
            Indie
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Action"
          />
          <label className="form-check-label" htmlFor="Action">
            Action
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Adventure"
          />
          <label className="form-check-label" htmlFor="Adventure">
            Adventure
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Adventure"
          />
          <label className="form-check-label" htmlFor="Adventure">
            Casual
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Adventure"
          />
          <label className="form-check-label" htmlFor="Adventure">
            Strategy
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="RPG"
          />
          <label className="form-check-label" htmlFor="RPG">
            RPG
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Simulation"
          />
          <label className="form-check-label" htmlFor="Simulation">
            Simulation
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Early Access"
          />
          <label className="form-check-label" htmlFor="Early Access">
            Early Access
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Free to Play"
          />
          <label className="form-check-label" htmlFor="Free to Play">
            Free to Play
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Sports"
          />
          <label className="form-check-label" htmlFor="Sports">
            Sports
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Racing"
          />
          <label className="form-check-label" htmlFor="Racing">
            Racing
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Massively Multiplayer"
          />
          <label className="form-check-label" htmlFor="Massively Multiplayer">
            Massively Multiplayer
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenreFilter;
