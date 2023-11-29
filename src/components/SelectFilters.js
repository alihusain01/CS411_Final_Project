import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectFilters = ({ selectValues, handleSelectChange }) => {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-4">
          <select
            className="form-select"
            aria-label="Maximum Price"
            value={selectValues.maximumPrice}
            onChange={(e) => handleSelectChange('maximumPrice', e.target.value)}
          >
            <option value="">Maximum Price</option>
            <option value="10">$10</option>
            <option value="20">$20</option>
            <option value="30">$30</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="500">$500</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            aria-label="Year Released"
            value={selectValues.yearReleased}
            onChange={(e) => handleSelectChange('yearReleased', e.target.value)}
          >
            <option value="">Year Released</option>
            <option value="1990-2000">1990-2000</option>
            <option value="2000-2010">2000-2010</option>
            <option value="2010+">2010+</option>
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            aria-label="Minimum Age"
            value={selectValues.minimumAge}
            onChange={(e) => handleSelectChange('minimumAge', e.target.value)}
          >
            <option value="">Minimum Age</option>
            <option value="0">None</option>
            <option value="13">13+</option>
            <option value="16">16+</option>
            <option value="17">17+</option>
            <option value="18">18+</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectFilters;
