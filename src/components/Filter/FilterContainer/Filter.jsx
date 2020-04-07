import React from "react";
import FilterButton from "../Buttons/FilterButton";
import FilterByPopularity from "../FilterByPopularity/FilterByPopularity";
import FilterByCategory from "../FilterByCategory/FilterByCategory";
import "./Filter.css";

// Refactor: use one div around filterByCategory component and filterbuttons and set that
// className to display: flex and use justify-content: space-between.
// Refactor two Filter Buttons by placing them in a ButtonsContainer component instead and
// use map to create two filter button elements

const FilterContainer = ({ movies }) => {
  return (
    <>
      <FilterByPopularity />
      <div className="filter-category-container">
        <FilterByCategory />
        <div className="filter-buttons-container">
          <FilterButton>Clear</FilterButton>
          <FilterButton>Apply</FilterButton>
        </div>
      </div>
    </>
  );
};

export default FilterContainer;
