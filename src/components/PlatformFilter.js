import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlatformFilter = ({ platforms, handlePlatformChange }) => {
  return (
    <div className="form-group">
      <div className="d-flex flex-wrap">
        {Object.entries(platforms).map(([platformKey, value]) => {
          return (
            <div className="form-check mb-2 me-4" key={platformKey}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={value}
                onChange={() => handlePlatformChange(platformKey)}
                id={platformKey}
              />
              <label className="form-check-label" htmlFor={platformKey}>
                {platformKey}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformFilter;
