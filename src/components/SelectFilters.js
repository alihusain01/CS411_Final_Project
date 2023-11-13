import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SelectFilters = () => {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-md-4">
          <select className="form-select" aria-label="Maximum Price">
            <option selected>Maximum Price</option>
            <option value="10">$10</option>
            <option value="20">$20</option>
            <option value="30">$30</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="500">$500</option>
          </select>
        </div>

        <div className="col-md-4">
          <select className="form-select" aria-label="Year Released">
            <option selected>Year Released</option>
            <option value="0">1990-2000</option>
            <option value="1">2000-2010</option>
            <option value="2">2010+</option>
          </select>
        </div>

        <div className="col-md-4">
          <select className="form-select" aria-label="Minimum Age">
            <option selected>Minimum Age</option>
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
