import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Search</div>
            <div className="card-body">
              <div class="form-group">
                <label>Genre:</label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
              </div>
              <form>
                <div className="mb-3">
                  <input
                    type="search"
                    className="form-control"
                    id="search"
                    placeholder="Game Title"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Search!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
