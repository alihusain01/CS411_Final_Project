import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import FilterAccordian from "./FilterAccordian.js";

const SearchBar = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Search</h4>
            </div>
            <div className="card-body">
              <FilterAccordian />

              <form className="mt-4">
                <div className="mb-3">
                  <input
                    type="search"
                    className="form-control"
                    id="search"
                    placeholder="Game Title"
                  />
                </div>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">
                    Search!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
