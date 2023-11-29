import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GenreFilter = ({genres, handleGenreChange}) => {

  return (
    <div className="form-group">
      <div className="d-flex flex-wrap">
        {/* Map through the genres state object to create checkboxes */}
        {Object.entries(genres).map(([genreKey, value]) => {
          // Convert camelCase keys to spaced strings for labels
          const label = genreKey
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .replace('Mmo', 'MMO'); // Special case for acronyms

          return (
            <div className="form-check mb-2 me-4" key={genreKey}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={value}
                onChange={() => handleGenreChange(genreKey)}
                id={genreKey}
              />
              <label className="form-check-label" htmlFor={genreKey}>
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreFilter;
