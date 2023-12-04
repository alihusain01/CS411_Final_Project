import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import GenreFilter from "./GenreFilter";
import PlatformFilter from "./PlatformFilter";
import CategoryFilter from "./CategoryFilter";
import SelectFilters from "./SelectFilters";

const FilterAccordian = ({genres, platforms, categories, selectValues, handleGenreChange, handlePlatformChange, handleCategoryChange, handleSelectChange}) => {

  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {" "}
          <h6>Genre</h6>{" "}
        </Accordion.Header>
        <Accordion.Body>
          <GenreFilter genres={genres} handleGenreChange={handleGenreChange}></GenreFilter>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h6>Platform</h6>
        </Accordion.Header>
        <Accordion.Body>
          <PlatformFilter platforms={platforms} handlePlatformChange={handlePlatformChange} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h6>Categories</h6>
        </Accordion.Header>
        <Accordion.Body>
          <CategoryFilter categories={categories} handleCategoryChange={handleCategoryChange}/>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h6>Additional Filters</h6>
        </Accordion.Header>
        <Accordion.Body>
          <SelectFilters selectValues={selectValues} handleSelectChange={handleSelectChange}/>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FilterAccordian;
