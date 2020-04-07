import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./FilterByPopularity.css";

const FilterByPopularity = () => {
  const filterTitles = ["Filter", "Popularity"];
  return (
    <div className="filter-tabs">
      {filterTitles.map((title, index) => {
        return <Dropdown key={index}> {title} </Dropdown>;
      })}
    </div>
  );
};

export default FilterByPopularity;
