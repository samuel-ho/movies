import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./FilterByPopularity.css";

const FilterByPopularity = () => {
  return (
    <div className="filter-tabs">
      <Dropdown> Filter </Dropdown>
      <Dropdown> Popularity </Dropdown>
    </div>
  );
};

export default FilterByPopularity;
