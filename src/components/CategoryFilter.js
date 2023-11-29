import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryFilter = ({ categories, handleCategoryChange }) => {
  return (
    <div className="form-group">
      <div className="d-flex flex-wrap">
        {Object.entries(categories).map(([categoryKey, value]) => {
          const label = categoryKey
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .replace('Mmo', 'MMO')
            .replace('Vr', 'VR'); // Special case for acronyms

          return (
            <div className="form-check mb-2 me-4" key={categoryKey}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={value}
                onChange={() => handleCategoryChange(categoryKey)}
                id={categoryKey}
              />
              <label className="form-check-label" htmlFor={categoryKey}>
                {label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
