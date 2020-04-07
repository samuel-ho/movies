import React from "react";
import FilterButton from "../Buttons/FilterButton";
import FilterByPopularity from "../FilterByPopularity/FilterByPopularity";
import FilterByCategory from "../FilterByCategory/FilterByCategory";
import "./Filter.css";

// Refactor: use one div around filterByCategory component and filterbuttons and set that className to display: flex
// and use space-between

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
