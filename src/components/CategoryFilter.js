import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryFilter = () => {
  return (
    <div className="form-group">
      <div className="d-flex flex-wrap">
        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Single Player"
          />
          <label className="form-check-label" htmlFor="Single Player">
            Single Player
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Multiplayer"
          />
          <label className="form-check-label" htmlFor="Multiplayer">
            Multiplayer
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Co-op"
          />
          <label className="form-check-label" htmlFor="Co-op">
            Co-op
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="MMO"
          />
          <label className="form-check-label" htmlFor="MMO">
            MMO
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="In App Purchases"
          />
          <label className="form-check-label" htmlFor="In App Purchases">
            In App Purchases
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Includes Source SDK"
          />
          <label className="form-check-label" htmlFor="Includes Source SDK">
            Includes Source SDK
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Includes Level Editor"
          />
          <label className="form-check-label" htmlFor="Includes Level Editor">
            Includes Level Editor
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="VR Support"
          />
          <label className="form-check-label" htmlFor="VR Support">
            VR Support
          </label>
        </div>

      </div>
    </div>
  );
};

export default CategoryFilter;
