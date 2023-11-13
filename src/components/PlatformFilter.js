import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PlatformFilter = () => {
  return (
    <div className="form-group">
      <div className="d-flex flex-wrap">
        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Mac"
          />
          <label className="form-check-label" htmlFor="Mac">
            Mac
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Linux"
          />
          <label className="form-check-label" htmlFor="Linux">
            Linux
          </label>
        </div>

        <div className="form-check mb-2 me-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Windows"
          />
          <label className="form-check-label" htmlFor="Windows">
            Windows
          </label>
        </div>
      </div>
    </div>
  );
};

export default PlatformFilter;
